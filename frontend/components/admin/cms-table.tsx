'use client';

import React, { useState } from 'react';
import { MOCK_CAREER_PATHS, MOCK_EDUCATIONAL_STREAMS } from '@/lib/mock-data';
import { Shield, Plus, Edit2, Trash2, Cpu, Activity, Database, Sparkles, Check } from 'lucide-react';

export function CMSTable() {
  const [activeTab, setActiveTab] = useState<'careers' | 'streams' | 'apiStats'>('careers');
  const [careers, setCareers] = useState(MOCK_CAREER_PATHS);
  const [streams, setStreams] = useState(MOCK_EDUCATIONAL_STREAMS);

  return (
    <div className="space-y-6">
      {/* Admin Stats Top Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-4 border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Total Career Taxonomy</span>
            <Database className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-black text-white">{careers.length}</div>
          <span className="text-[10px] text-emerald-400 font-semibold">Active in Supabase DDL</span>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Class 10 Streams</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-white">{streams.length}</div>
          <span className="text-[10px] text-indigo-400 font-semibold">100% Dynamic Metadata</span>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Vector RPC Match Rate</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white">99.4%</div>
          <span className="text-[10px] text-amber-400 font-semibold">1536-dim pgvector</span>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Monthly API Usage</span>
            <Cpu className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-black text-white">42,850</div>
          <span className="text-[10px] text-purple-400 font-semibold">OpenAI + Supabase RPC</span>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('careers')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'careers' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Manage Career Taxonomy ({careers.length})
          </button>
          <button
            onClick={() => setActiveTab('streams')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'streams' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Manage Streams ({streams.length})
          </button>
          <button
            onClick={() => setActiveTab('apiStats')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'apiStats' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            API Token Usage
          </button>
        </div>

        <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow hover:bg-indigo-500 transition-colors">
          <Plus className="w-4 h-4" /> Add New Record
        </button>
      </div>

      {/* Content Table */}
      {activeTab === 'careers' && (
        <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/80 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-bold uppercase">
                <th className="p-3">Career Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Eligible Streams</th>
                <th className="p-3">Starting Salary</th>
                <th className="p-3">Growth Rate</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {careers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-bold text-white">{c.title}</td>
                  <td className="p-3 text-slate-400">{c.category}</td>
                  <td className="p-3 font-mono">{c.eligible_streams.join(', ').toUpperCase()}</td>
                  <td className="p-3 text-emerald-400 font-semibold">${c.avg_salary.entry.toLocaleString()}</td>
                  <td className="p-3 text-indigo-400 font-semibold">+{c.demand_growth_pct}%</td>
                  <td className="p-3 text-right space-x-2">
                    <button className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg bg-rose-950 text-rose-300 hover:bg-rose-900">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'streams' && (
        <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/80 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-bold uppercase">
                <th className="p-3">Code</th>
                <th className="p-3">Stream Title</th>
                <th className="p-3">Difficulty</th>
                <th className="p-3">Subjects</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {streams.map((s) => (
                <tr key={s.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-mono font-bold text-indigo-400">{s.code.toUpperCase()}</td>
                  <td className="p-3 font-bold text-white">{s.title}</td>
                  <td className="p-3 font-bold text-amber-400">{s.difficulty_level}/5</td>
                  <td className="p-3 text-slate-400">{s.subjects.join(', ')}</td>
                  <td className="p-3 text-right space-x-2">
                    <button className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'apiStats' && (
        <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 space-y-4">
          <h4 className="font-bold text-white text-sm">System API Token & Vector Search Health</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-300">
                <span>Supabase pgvector Cosine Latency</span>
                <span className="text-emerald-400">14 ms avg</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-1/4" />
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-300">
                <span>OpenAI Embedding Token Quota</span>
                <span className="text-indigo-400">22% used</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[22%]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
