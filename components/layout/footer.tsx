import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/60 py-6 px-4 sm:px-8 text-center text-xs text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-300">CareerDNA AI (PathFinder)</span>
          <span>— Enterprise Lifelong AI Guidance Platform</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Supabase DDL Spec</a>
          <a href="#" className="hover:text-slate-300 transition-colors">API Docs v1</a>
          <a href="#" className="hover:text-slate-300 transition-colors">System Status</a>
        </div>
      </div>
    </footer>
  );
}
