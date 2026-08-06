'use client';

import React, { useEffect, useState } from 'react';
import { generateRecommendations } from '@/lib/ai/engine';
import { RecommendationResult, QuestionnaireData } from '@/lib/types';
import { WhyThisCareerCard } from '@/components/guidance/why-this-career-card';
import { Award, Sparkles, RefreshCw, Filter, Columns3 } from 'lucide-react';
import Link from 'next/link';

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let savedVector: QuestionnaireData | null = null;
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('careerdna_vector');
      if (stored) {
        try {
          savedVector = JSON.parse(stored);
        } catch (e) {}
      }
    }

    const defaultVector: QuestionnaireData = savedVector || {
      currentStage: 'class_12',
      completedStream: 'mpc',
      enjoyedSubjects: ['Mathematics', 'Computers & Coding', 'Physics'],
      existingSkills: ['Python', 'Mathematics', 'C++'],
      activityPreferences: ['Programming', 'Problem Solving'],
      workStylePreferences: ['Working with Computers', 'Remote Work'],
      learningStyle: 'Practical & Hands-on Projects',
      longTermAspirations: ['High Salary', 'Innovation'],
      environmentPreference: 'Corporate Office'
    };

    const results = generateRecommendations(defaultVector);
    setRecommendations(results);
    setLoading(false);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              AI Compatibility Engine & Transparent Reasoning
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Your Top Personalized Career Recommendations
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Ranked with 0-100% Career Compatibility Scores based on your typed skills & questionnaire vector.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/student/questionnaire"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retake Assessment
            </Link>

            <Link
              href="/student/career-compare"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow hover:bg-indigo-500"
            >
              <Columns3 className="w-3.5 h-3.5" /> Compare Matrix
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendations Feed */}
      {loading ? (
        <div className="py-12 text-center text-slate-400 flex flex-col items-center gap-3">
          <Sparkles className="w-8 h-8 text-indigo-400 animate-spin" />
          <p className="text-xs font-semibold">Computing CareerDNA Compatibility Vector...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {recommendations.map((rec, idx) => (
            <WhyThisCareerCard
              key={rec.career.id}
              recommendation={rec}
              rank={idx + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
