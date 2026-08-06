'use client';

import React, { useState } from 'react';
import { EducationalStream } from '@/lib/types';
import { BookOpen, Star, CheckCircle, AlertTriangle, ArrowRight, DollarSign, TrendingUp, Award, Layers } from 'lucide-react';

interface StreamCardProps {
  stream: EducationalStream;
  onSelect?: (streamCode: string) => void;
}

export function StreamCard({ stream, onSelect }: StreamCardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'financial' | 'proscons' | 'exams'>('overview');

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 bg-slate-900/60 relative overflow-hidden group">
      {/* Top accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80" />

      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3 h-3" />
              Stream Code: {stream.code.toUpperCase()}
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              {stream.title}
            </h3>
          </div>
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-xl text-xs font-medium text-amber-400" title="Difficulty Rating (1-5)">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Difficulty: {stream.difficulty_level}/5</span>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-5">
          {stream.description}
        </p>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800/80 mb-5">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('financial')}
            className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-colors ${
              activeTab === 'financial' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Demand & Salary
          </button>
          <button
            onClick={() => setActiveTab('proscons')}
            className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-colors ${
              activeTab === 'proscons' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Pros & Cons
          </button>
          <button
            onClick={() => setActiveTab('exams')}
            className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-colors ${
              activeTab === 'exams' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Exams & Colleges
          </button>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[160px]">
          {activeTab === 'overview' && (
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                  Subjects Covered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stream.subjects.map((sub, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700/60">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                  Key Target Careers:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stream.career_opportunities.map((opp, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-indigo-950/50 text-indigo-300 border border-indigo-800/40">
                      {opp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'financial' && (
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300 font-medium">Average Pay Band</span>
                </div>
                <span className="text-emerald-400 font-bold">{stream.financial_demand?.avg_salary_range}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-400" />
                  <span className="text-slate-300 font-medium">Market Growth Rate</span>
                </div>
                <span className="text-indigo-400 font-bold">{stream.financial_demand?.future_growth_rate}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                  Psychometric Alignment:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stream.riasec_alignment?.map((r, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40 font-mono text-[10px]">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'proscons' && (
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[11px] mb-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Key Advantages:
                </span>
                <ul className="space-y-1 text-slate-300 pl-4 list-disc">
                  {stream.pros_cons.advantages.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-amber-400 font-semibold flex items-center gap-1 text-[11px] mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Potential Considerations:
                </span>
                <ul className="space-y-1 text-slate-300 pl-4 list-disc">
                  {stream.pros_cons.disadvantages.map((dis, i) => (
                    <li key={i}>{dis}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'exams' && (
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                  Target Entrance Exams:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stream.entrance_exams?.map((ex, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                  Top Colleges & Universities:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stream.top_colleges?.map((col, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Select CTA */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Higher Education: <strong className="text-slate-200">{stream.higher_education_options[0]}</strong>
        </span>
        <button
          onClick={() => onSelect && onSelect(stream.code)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-md hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Explore Pathway <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
