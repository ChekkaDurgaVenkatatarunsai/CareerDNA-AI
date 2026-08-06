'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Columns3, 
  FileText, 
  Mic, 
  Shield, 
  Award,
  Layers,
  Database
} from 'lucide-react';

const LIFE_STAGES = [
  {
    stage: 'Academic Guidance (Class 10 & 12)',
    badge: 'Unified Module',
    desc: 'Unified stream selection & degree mapping across MPC, BiPC, MEC, CEC, HEC, Vocational, Polytechnic & Arts.',
    href: '/student/academic-guidance',
    icon: BookOpen,
    color: 'from-blue-500/20 to-indigo-500/20 text-indigo-400 border-indigo-500/30'
  },
  {
    stage: 'Diploma / Polytechnic Bridge',
    badge: 'Skill Bridge',
    desc: 'Polytechnic skill bridge modules, B.Tech lateral entry degree pathways, and direct workforce readiness.',
    href: '/student/questionnaire',
    icon: Layers,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
  },
  {
    stage: 'Undergraduate (UG) Specialization',
    badge: 'Degree Match',
    desc: 'Domain specializations, tech internship matching, competitive exam trackers (GATE, GRE, CAT).',
    href: '/student/recommendations',
    icon: Award,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30'
  },
  {
    stage: 'Postgraduate (PG) Research',
    badge: 'R&D / Leadership',
    desc: 'Research pathways, doctoral thesis proposals, executive leadership tracks, and patent analytics.',
    href: '/student/roadmap',
    icon: Briefcase,
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30'
  },
  {
    stage: 'Working Professionals',
    badge: 'Mid-Career Pivot',
    desc: 'Executive upskilling matrix, differential skill-gap delta analysis, and high-growth pivot strategies.',
    href: '/student/resume-analyzer',
    icon: FileText,
    color: 'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30'
  },
  {
    stage: 'Parent Guidance Portal',
    badge: 'Family Insights',
    desc: 'Invite-code linkage, jargon-free radar charts, roadmap visibility, and printable progress digests.',
    href: '/parent',
    icon: Users,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-purple-950/40 p-8 sm:p-12 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            Supabase DB Powered AI Career Intelligence Platform
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            Discover Your Career DNA with <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">PathFinder AI</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Unified Class 10 & 12 academic guidance, dynamic Supabase database query backend, psychometric compatibility vectors, and transparent reasoning.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/student/academic-guidance"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/25 hover:scale-105 transition-all"
            >
              Explore Academic Guidance <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/student/questionnaire"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              Start 7-Step AI Questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* Lifelong Stages Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-white">
            Lifelong Guidance Architecture
          </h2>
          <p className="text-xs text-slate-400">
            Unified stream and degree mapping powered by Supabase PostgreSQL and vector matching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIFE_STAGES.map((ls, idx) => {
            const Icon = ls.icon;
            return (
              <Link
                key={idx}
                href={ls.href}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 bg-slate-900/60 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl border bg-gradient-to-br ${ls.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                      {ls.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {ls.stage}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {ls.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 pt-3 border-t border-slate-800/80">
                  Explore Module <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
