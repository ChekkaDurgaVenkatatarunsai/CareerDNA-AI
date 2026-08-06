import { supabase } from './client';
import { MOCK_EDUCATIONAL_STREAMS, MOCK_CAREER_PATHS } from '../mock-data';
import { EducationalStream, CareerPath, QuestionnaireData, RecommendationResult } from '../types';
import { generateRecommendations } from '../ai/engine';

/**
 * Fetch Educational Streams from Supabase or Fallback
 */
export async function getEducationalStreams(): Promise<EducationalStream[]> {
  try {
    const { data, error } = await supabase
      .from('educational_streams')
      .select('*')
      .order('code');

    if (!error && data && data.length > 0) {
      return data as EducationalStream[];
    }
  } catch (err) {
    console.warn('Supabase offline or table uninitialized, returning seed data.');
  }

  return MOCK_EDUCATIONAL_STREAMS;
}

/**
 * Fetch Career Paths Taxonomy from Supabase or Fallback
 */
export async function getCareerPaths(): Promise<CareerPath[]> {
  try {
    const { data, error } = await supabase
      .from('career_paths')
      .select('*')
      .order('title');

    if (!error && data && data.length > 0) {
      return data as CareerPath[];
    }
  } catch (err) {
    console.warn('Supabase offline or table uninitialized, returning seed data.');
  }

  return MOCK_CAREER_PATHS;
}

/**
 * Compute and Save User Recommendations to Supabase
 */
export async function computeAndSaveRecommendations(
  userId: string | null,
  questionnaire: QuestionnaireData
): Promise<RecommendationResult[]> {
  const recommendations = generateRecommendations(questionnaire);

  // If authenticated user ID provided, attempt persisting to Supabase
  if (userId) {
    try {
      const rowsToInsert = recommendations.slice(0, 5).map(rec => ({
        user_id: userId,
        career_id: rec.career.id,
        compatibility_score: rec.compatibilityScore,
        why_this_career: rec.whyThisCareer
      }));

      await supabase
        .from('user_recommendations')
        .insert(rowsToInsert);
    } catch (err) {
      console.warn('Could not save user recommendations to Supabase DB:', err);
    }
  }

  return recommendations;
}
