'use client';

import React, { useState } from 'react';
import { RecommendationResult } from '@/lib/types';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  AlertCircle, 
  DollarSign, 
  CheckCircle2, 
  UserCheck, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  GraduationCap, 
  BookOpen,
  Check,
  Wrench
} from 'lucide-react';

interface WhyThisCareerCardProps {
  recommendation: RecommendationResult;
  rank: number;
}

export function WhyThisCareerCard({ recommendation, rank }: WhyThisCareerCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { career, compatibilityScore, whyThisCareer, userMatchedSkills, missingSkillsDelta } = recommendation;

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 shadow-xl relative overflow-hidden transition-all hover:border-indigo-500/40">
      {/* Compatibility Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-extrabold text-sm shadow-inner">
            #{rank}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">{career.title}</h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                {career.category}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{career.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
              {compatibilityScore}%
            </div>
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Compatibility
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-indigo-500/30 p-1 flex items-center justify-center">
            <div 
              className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center text-slate-950 font-bold text-xs"
              style={{ opacity: compatibilityScore / 100 }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* User Matched Skills vs Career Skills Bar */}
      {userMatchedSkills && userMatchedSkills.length > 0 && (
        <div className="mb-5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Skills You Already Have ({userMatchedSkills.length} Matched):</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {userMatchedSkills.map((sk, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200 border border-emerald-700/50 text-[10px] font-semibold flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-400" /> {sk}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Mid-Career Pay
          </span>
          <span className="text-sm font-bold text-emerald-400">
            {whyThisCareer.salaryProgression.mid}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Demand Growth
          </span>
          <span className="text-sm font-bold text-indigo-400">
            +{career.demand_growth_pct}% CAGR
          </span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Min Stage
          </span>
          <span className="text-sm font-bold text-slate-200 uppercase">
            {career.min_education} Degree
          </span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Stability Index
          </span>
          <span className="text-sm font-bold text-purple-400">
            {recommendation.stabilityIndex}
          </span>
        </div>
      </div>

      {/* "Why This Career?" Explainability Breakdown */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/30 via-slate-900 to-purple-950/20 border border-indigo-500/20 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Why This Career Fits Your DNA (Transparent AI Explainability)
          </h4>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <span className="text-slate-400 font-semibold block mb-0.5">Interest Alignment:</span>
            <p className="text-slate-200 leading-relaxed">{whyThisCareer.interestMatch}</p>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block mb-0.5">Skill & Cognitive Suitability:</span>
            <p className="text-slate-200 leading-relaxed">{whyThisCareer.skillSuitability}</p>
          </div>
        </div>
      </div>

      {/* Expandable Deep-Dive Details */}
      {expanded && (
        <div className="space-y-4 pt-2 border-t border-slate-800/80 text-xs animate-fadeIn">
          {/* Missing Skills Delta Analysis */}
          <div>
            <h5 className="font-bold text-slate-200 mb-2 uppercase text-[10px] tracking-wider">
              Differential Skill-Gap Delta Analysis:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-800/30">
                <span className="text-rose-400 font-semibold text-[10px] block mb-1">Critical Skills to Learn:</span>
                <div className="flex flex-wrap gap-1">
                  {missingSkillsDelta.critical.length > 0 ? (
                    missingSkillsDelta.critical.map((sk, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-rose-900/50 text-rose-200 text-[10px]">
                        + {sk}
                      </span>
                    ))
                  ) : (
                    <span className="text-[10px] text-emerald-400">All critical skills matched!</span>
                  )}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-800/30">
                <span className="text-amber-400 font-semibold text-[10px] block mb-1">Moderate Gaps:</span>
                <div className="flex flex-wrap gap-1">
                  {missingSkillsDelta.moderate.map((sk, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-amber-900/50 text-amber-200 text-[10px]">
                      + {sk}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 font-semibold text-[10px] block mb-1">Optional Upskilling:</span>
                <div className="flex flex-wrap gap-1">
                  {missingSkillsDelta.optional.map((sk, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                      + {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Educational Degree & Colleges Feed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 font-semibold block mb-1 text-[10px] uppercase">
                Recommended Degree Mapping:
              </span>
              <p className="text-slate-200 font-medium mb-2">{recommendation.educationalPath}</p>
              <div className="flex flex-wrap gap-1">
                {recommendation.recommendedDegrees.map((deg, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40 text-[10px]">
                    {deg}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 font-semibold block mb-1 text-[10px] uppercase">
                Top Institutions & Exams:
              </span>
              <div className="flex flex-wrap gap-1 mb-2">
                {career.entrance_exams.map((ex, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/40 text-[10px] font-semibold">
                    Exam: {ex}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {career.top_colleges.map((col, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Real World Role Models */}
          {whyThisCareer.roleModels.length > 0 && (
            <div>
              <span className="text-slate-400 font-semibold block mb-2 text-[10px] uppercase tracking-wider">
                Industry Role Models & Trailblazers:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {whyThisCareer.roleModels.map((rm, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <div className="font-bold text-indigo-300 text-xs">{rm.name}</div>
                    <div className="text-[10px] text-slate-400 font-medium mb-1">{rm.title}</div>
                    <p className="text-[11px] text-slate-300 leading-normal">{rm.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Expand / Collapse Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full mt-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
      >
        {expanded ? (
          <>Less Details <ChevronUp className="w-4 h-4" /></>
        ) : (
          <>Full Skill Delta, Colleges & Role Models <ChevronDown className="w-4 h-4" /></>
        )}
      </button>
    </div>
  );
}
