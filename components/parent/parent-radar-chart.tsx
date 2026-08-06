'use client';

import React, { useState } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { Users, Key, Printer, Download, Sparkles, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';

const RADAR_DATA = [
  { subject: 'Analytical Logic', score: 92 },
  { subject: 'Creative Design', score: 78 },
  { subject: 'Practical Problem Solving', score: 88 },
  { subject: 'Communication & Leadership', score: 82 },
  { subject: 'Scientific Inquiry', score: 95 },
  { subject: 'Commercial Literacy', score: 70 }
];

const CAREER_MATCH_DATA = [
  { name: 'AI Engineer', match: 94 },
  { name: 'Data Scientist', match: 89 },
  { name: 'Neurosurgeon', match: 82 },
  { name: 'Robotics Eng', match: 85 }
];

export function ParentRadarChart() {
  const [inviteCode, setInviteCode] = useState('PATH-8842-STUDENT');
  const [paired, setPaired] = useState(true);

  return (
    <div className="space-y-6">
      {/* Token Linkage Header */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              Parent Guidance Portal (Read-Only Transparent Visibility)
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Child Academic Discovery & Skill Intelligence Dashboard
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Paired Student: John Doe (Class 12 MPC)
            </div>
            <button 
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1 hover:bg-indigo-500 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Printable Digest
            </button>
          </div>
        </div>

        {/* Pairing Code Bar */}
        <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Key className="w-4 h-4 text-amber-400" />
            <span>Student Invite Code: <strong className="text-white font-mono">{inviteCode}</strong></span>
          </div>
          <span className="text-[10px] text-slate-400">Linked on Aug 5, 2026</span>
        </div>
      </div>

      {/* Visual Radar & Bar Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80">
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Child's Aptitude & Strengths (Jargon-Free)
          </h4>
          <p className="text-xs text-slate-400 mb-4">
            Visual breakdown of your child's natural learning strengths across key cognitive domains.
          </p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fill: '#cbd5e1', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                <Radar name="Child Score" dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Matches Bar Chart */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80">
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Top Career Compatibility Match Scores
          </h4>
          <p className="text-xs text-slate-400 mb-4">
            Highest scoring career pathways based on your child's questionnaire vector.
          </p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CAREER_MATCH_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#cbd5e1', fontSize: 11 }} />
                <YAxis domain={[0, 100]} stroke="#475569" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
                <Bar dataKey="match" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Simplified Plain-Language Summary for Parents */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 space-y-3">
        <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
          Parent Monthly Digest & Actionable Next Steps:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">1. Current Milestone:</span>
            Preparing for Class 12 MPC Board Exams and JEE Main competitive entrance targets.
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-indigo-400 font-bold block mb-1">2. Target Degree Pathway:</span>
            B.Tech in Artificial Intelligence or Computer Science Engineering.
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-purple-400 font-bold block mb-1">3. Expected Pay Ceiling:</span>
            Entry: $85,000 / year (₹7.5 LPA) with +28.5% global market growth.
          </div>
        </div>
      </div>
    </div>
  );
}
