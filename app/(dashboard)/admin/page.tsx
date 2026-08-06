'use client';

import React from 'react';
import { CMSTable } from '@/components/admin/cms-table';

export default function AdminPage() {
  return (
    <div className="py-4 space-y-6">
      <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80">
        <h1 className="text-xl font-extrabold text-white">Admin CMS Dashboard & Platform Control</h1>
        <p className="text-xs text-slate-400 mt-1">Manage streams, career taxonomies, exam dates, and monitor API token usage.</p>
      </div>
      <CMSTable />
    </div>
  );
}
