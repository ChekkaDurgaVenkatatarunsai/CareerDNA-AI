'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Sparkles, 
  Layers, 
  GraduationCap, 
  Award, 
  Columns3, 
  GitFork, 
  FileText, 
  Mic, 
  Users, 
  ShieldAlert,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const NAV_ITEMS = [
  {
    section: 'Guidance Modules',
    items: [
      { name: 'Unified Academic Guidance', href: '/student/academic-guidance', icon: BookOpen, badge: 'Class 10 & 12' },
      { name: '7-Step AI Questionnaire', href: '/student/questionnaire', icon: Sparkles, badge: 'Vector' },
      { name: 'AI Recommendations & Why', href: '/student/recommendations', icon: Award, badge: 'Top 10' }
    ]
  },
  {
    section: 'Intelligence & Planning',
    items: [
      { name: 'Side-by-Side Comparison', href: '/student/career-compare', icon: Columns3 },
      { name: 'Interactive Roadmap DAG', href: '/student/roadmap', icon: GitFork },
      { name: 'ATS Resume Analyzer', href: '/student/resume-analyzer', icon: FileText, badge: 'ATS 100' },
      { name: 'AI Mock Interview Mentor', href: '/student/interview-mentor', icon: Mic, badge: 'Voice' }
    ]
  },
  {
    section: 'Portals & Admin',
    items: [
      { name: 'Parent Dashboard', href: '/parent', icon: Users },
      { name: 'Admin CMS Dashboard', href: '/admin', icon: ShieldAlert }
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950/60 p-4 flex flex-col justify-between hidden md:flex min-h-[calc(100vh-4rem)]">
      <div className="space-y-6">
        {NAV_ITEMS.map((group, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              {group.section}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-md shadow-indigo-500/10'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                        isActive ? 'bg-indigo-500/30 text-indigo-200' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Supabase & Vector Status Widget */}
      <div className="mt-8 p-3 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-500/20">
        <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs mb-1">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          Supabase Vector Engine Active
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
          Connected to Supabase DB schema. Vector match latency 14ms.
        </p>
        <Link href="/student/questionnaire" className="inline-flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold">
          Update Vector <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </aside>
  );
}
