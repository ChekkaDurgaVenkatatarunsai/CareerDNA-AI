'use client';

import React, { useState } from 'react';
import { CareerPath } from '@/lib/types';
import { MOCK_CAREER_PATHS } from '@/lib/mock-data';
import { Columns3, Check, X, ArrowUpDown, Plus, DollarSign, Briefcase, Award, Shield, Sparkles } from 'lucide-react';

export function CompareMatrix() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'car-ai-eng',
    'car-data-sci',
    'car-neuro-surgeon',
    'car-ca-finance'
  ]);

  const selectedCareers = MOCK_CAREER_PATHS.filter(c => selectedIds.includes(c.id));

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(i => i !== id));
      }
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Selector */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Columns3 className="w-5 h-5 text-indigo-400" />
              Side-by-Side Career Comparison Matrix
            </h3>
            <p className="text-xs text-slate-400">
              Select up to 4 careers to compare eligibility, compensation, difficulty, work-life balance, and market growth.
            </p>
          </div>
          <div className="text-xs font-semibold text-indigo-300 px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            Comparing {selectedCareers.length} / 4 Careers
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {MOCK_CAREER_PATHS.map(c => {
            const isSelected = selectedIds.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => toggleSelect(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5 text-slate-500" />}
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/80 overflow-x-auto shadow-2xl">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80">
              <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/5">
                Comparison Metric
              </th>
              {selectedCareers.map(c => (
                <th key={c.id} className="p-4 text-xs font-extrabold text-white w-1/4 border-l border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-indigo-300">{c.title}</span>
                    <button onClick={() => toggleSelect(c.id)} className="text-slate-500 hover:text-rose-400">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 font-normal block">{c.category}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-xs">
            {/* 1. Eligibility & Duration */}
            <tr>
              <td className="p-4 font-bold text-slate-300 bg-slate-950/40">
                Eligibility & Duration
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 border-l border-slate-800 text-slate-200">
                  <span className="font-semibold text-white uppercase block mb-0.5">
                    {c.min_education.toUpperCase()} Degree (3-5 Yrs)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Streams: {c.eligible_streams.map(s => s.toUpperCase()).join(', ')}
                  </span>
                </td>
              ))}
            </tr>

            {/* 2. Salary Brackets */}
            <tr>
              <td className="p-4 font-bold text-slate-300 bg-slate-950/40">
                Average & Highest Salary
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 border-l border-slate-800 text-slate-200">
                  <div className="font-bold text-emerald-400">
                    ${c.avg_salary.entry.toLocaleString()} / ${c.avg_salary.senior.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">Entry / Senior per annum</div>
                </td>
              ))}
            </tr>

            {/* 3. Difficulty & Required Skills */}
            <tr>
              <td className="p-4 font-bold text-slate-300 bg-slate-950/40">
                Difficulty & Required Skills
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 border-l border-slate-800 text-slate-200">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-2 ${
                    c.difficulty_level === 'Very High' ? 'bg-rose-950 text-rose-300 border border-rose-800' :
                    c.difficulty_level === 'High' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                    'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  }`}>
                    {c.difficulty_level} Difficulty
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {c.required_skills.slice(0, 3).map((sk, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                        {sk}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* 4. Work-Life Balance */}
            <tr>
              <td className="p-4 font-bold text-slate-300 bg-slate-950/40">
                Work-Life Balance & Remote
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 border-l border-slate-800 text-slate-200">
                  <span className="font-semibold text-indigo-300 block mb-0.5">
                    {c.work_life_balance}
                  </span>
                </td>
              ))}
            </tr>

            {/* 5. Govt vs Private Split */}
            <tr>
              <td className="p-4 font-bold text-slate-300 bg-slate-950/40">
                Govt vs Private Opportunities
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 border-l border-slate-800 text-slate-200">
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex mb-1">
                    <div className="bg-amber-500 h-full" style={{ width: `${c.govt_vs_private.govt_pct}%` }} />
                    <div className="bg-indigo-500 h-full" style={{ width: `${c.govt_vs_private.private_pct}%` }} />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>{c.govt_vs_private.govt_pct}% Govt</span>
                    <span>{c.govt_vs_private.private_pct}% Private</span>
                  </div>
                </td>
              ))}
            </tr>

            {/* 6. Growth Rate */}
            <tr>
              <td className="p-4 font-bold text-slate-300 bg-slate-950/40">
                Global Demand & Growth Rate
              </td>
              {selectedCareers.map(c => (
                <td key={c.id} className="p-4 border-l border-slate-800 font-bold text-purple-400">
                  +{c.demand_growth_pct}% CAGR
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
