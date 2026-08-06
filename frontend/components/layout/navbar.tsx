'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, User, Shield, Users, Bell, Layers } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                CareerDNA <span className="text-indigo-400 font-extrabold">AI</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                Supabase DB Active
              </span>
            </div>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-xl">
          <Link 
            href="/student/academic-guidance" 
            className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Academic Guidance (10th & 12th)
          </Link>
          <Link 
            href="/student/questionnaire" 
            className="px-3 py-1.5 text-xs font-medium rounded-lg text-indigo-300 hover:bg-indigo-600/20 transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            AI Questionnaire
          </Link>
          <Link 
            href="/student/recommendations" 
            className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Top Recommendations
          </Link>
        </div>

        {/* Right profile / stage indicators */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Supabase pgvector Active
          </div>

          <Link href="/parent" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" title="Parent Dashboard">
            <Users className="w-4 h-4" />
          </Link>

          <Link href="/admin" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" title="Admin CMS">
            <Shield className="w-4 h-4" />
          </Link>

          <div className="h-6 w-px bg-slate-800" />

          <div className="flex items-center gap-2.5 pl-1">
            <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-semibold text-xs">
              JD
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-xs font-semibold text-white">John Doe</div>
              <div className="text-[10px] text-slate-400">MPC Stream</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
