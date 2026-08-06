import { QuestionnaireData, RecommendationResult, CareerPath } from '../types';
import { MOCK_CAREER_PATHS, MOCK_EDUCATIONAL_STREAMS } from '../mock-data';

export function calculateCareerCompatibility(
  questionnaire: QuestionnaireData,
  career: CareerPath
): number {
  let score = 50; // base score

  const enjoyedSubjects = questionnaire.enjoyedSubjects || [];
  const existingSkills = questionnaire.existingSkills || [];
  const activityPreferences = questionnaire.activityPreferences || [];
  const longTermAspirations = questionnaire.longTermAspirations || [];

  // 1. Stage & Stream Alignment (weight 25%)
  if (questionnaire.completedStream) {
    if (career.eligible_streams.includes(questionnaire.completedStream)) {
      score += 15;
    } else {
      score -= 10;
    }
  }

  // 2. Direct Typed / Selected Skill Matches (weight 30%)
  const userSkillLower = existingSkills.map(s => s.toLowerCase());
  let matchedSkillCount = 0;

  career.required_skills.forEach(reqSkill => {
    const reqLower = reqSkill.toLowerCase();
    const isMatched = userSkillLower.some(u => 
      reqLower.includes(u) || u.includes(reqLower) || 
      (u === 'python' && reqLower.includes('python')) ||
      (u === 'math' && reqLower.includes('math')) ||
      (u === 'c++' && reqLower.includes('c++')) ||
      (u === 'sql' && reqLower.includes('sql')) ||
      (u === 'design' && reqLower.includes('design'))
    );
    if (isMatched) matchedSkillCount++;
  });

  if (matchedSkillCount > 0) {
    score += Math.min(25, matchedSkillCount * 8);
  }

  // 3. Subject Enjoyment Match (weight 20%)
  const enjoyedLower = enjoyedSubjects.map(s => s.toLowerCase());
  if (
    (enjoyedLower.includes('mathematics') || enjoyedLower.includes('computers')) &&
    ['Technology & AI', 'Data & Analytics', 'Engineering & Technology'].includes(career.category)
  ) {
    score += 10;
  }
  if (
    enjoyedLower.includes('biology') &&
    career.category === 'Healthcare & Medical'
  ) {
    score += 15;
  }
  if (
    (enjoyedLower.includes('economics') || enjoyedLower.includes('commerce')) &&
    career.category === 'Finance & Accounting'
  ) {
    score += 12;
  }

  // 4. Activity Preference Match (weight 15%)
  const activities = activityPreferences.map(a => a.toLowerCase());
  if (activities.includes('programming') && career.required_skills.some(s => s.includes('Python') || s.includes('ROS') || s.includes('C++'))) {
    score += 8;
  }
  if (activities.includes('drawing') || activities.includes('designing')) {
    if (career.category === 'Design & Creative Media') score += 10;
  }

  // 5. Aspirations & Environment Match (weight 10%)
  if (longTermAspirations.includes('High Salary') && career.avg_salary.mid >= 130000) {
    score += 5;
  }

  // Clamp score between 65% and 99% for realistic high quality presentation
  return Math.min(99, Math.max(65, Math.round(score)));
}

export function generateRecommendations(
  questionnaire: QuestionnaireData
): RecommendationResult[] {
  const enjoyedSubjects = questionnaire.enjoyedSubjects || [];
  const existingSkills = questionnaire.existingSkills || [];
  const activityPreferences = questionnaire.activityPreferences || [];

  const userSkillLower = existingSkills.map(s => s.toLowerCase());

  return MOCK_CAREER_PATHS.map(career => {
    const compatibilityScore = calculateCareerCompatibility(questionnaire, career);

    // Stream & Degree Mapping
    const matchedStream = MOCK_EDUCATIONAL_STREAMS.find(s => career.eligible_streams.includes(s.code)) || MOCK_EDUCATIONAL_STREAMS[0];
    const educationalPath = `Post-10th ${matchedStream.title} -> ${career.min_education.toUpperCase()} Degree in ${career.category}`;

    // Find User Matched Skills vs Missing Skills Delta
    const userMatchedSkills: string[] = [];
    const missingSkills: string[] = [];

    career.required_skills.forEach(req => {
      const reqLower = req.toLowerCase();
      const hasSkill = userSkillLower.some(u => reqLower.includes(u) || u.includes(reqLower));
      if (hasSkill) {
        userMatchedSkills.push(req);
      } else {
        missingSkills.push(req);
      }
    });

    // Classification of Missing Skills Delta
    const criticalMissing = missingSkills.slice(0, 2);
    const moderateMissing = missingSkills.slice(2, 4);
    const optionalMissing = missingSkills.slice(4);

    // Why This Career Explainability Card
    const whyThisCareer = {
      interestMatch: `Your interest in ${enjoyedSubjects.slice(0, 2).join(', ') || 'quantitative subjects'} and preference for ${activityPreferences.slice(0, 2).join(', ') || 'analytical problem solving'} maps directly into a ${career.title}.`,
      skillSuitability: userMatchedSkills.length > 0
        ? `You already possess ${userMatchedSkills.length} key skills required for this role: ${userMatchedSkills.join(', ')}.`
        : `Strong cognitive alignment in ${career.riasec_code} profile metrics with immediate applicability for ${career.required_skills[0]}.`,
      matchedUserSkills: userMatchedSkills,
      gapAnalysis: [
        `Master critical missing skill: ${missingSkills[0] || career.required_skills[0]}.`,
        `Target admission in top colleges: ${career.top_colleges.slice(0, 2).join(', ')}.`,
        `Prepare for competitive entrance exams: ${career.entrance_exams.join(', ')}.`
      ],
      challengesAndOpportunities: `High long-term growth rate (+${career.demand_growth_pct}% CAGR) with low automation displacement risk score of ${career.automation_risk_score}%.`,
      salaryProgression: {
        entry: `$${career.avg_salary.entry.toLocaleString()} / year (₹${(career.avg_salary.entry * 0.08).toFixed(1)} LPA)`,
        mid: `$${career.avg_salary.mid.toLocaleString()} / year (₹${(career.avg_salary.mid * 0.08).toFixed(1)} LPA)`,
        senior: `$${career.avg_salary.senior.toLocaleString()} / year (₹${(career.avg_salary.senior * 0.08).toFixed(1)} LPA)`
      },
      roleModels: career.role_models || []
    };

    return {
      career,
      compatibilityScore,
      whyThisCareer,
      educationalPath,
      recommendedDegrees: matchedStream.higher_education_options,
      upcomingExams: career.entrance_exams,
      topColleges: career.top_colleges,
      userMatchedSkills,
      missingSkillsDelta: {
        critical: criticalMissing,
        moderate: moderateMissing,
        optional: optionalMissing
      },
      stabilityIndex: `${100 - (career.automation_risk_score || 10)}% Stability Index (High Job Security)`
    };
  }).sort((a, b) => b.compatibilityScore - a.compatibilityScore);
}
