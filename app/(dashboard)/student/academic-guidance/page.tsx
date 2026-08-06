'use client';

import React, { useState, useEffect } from 'react';
import { EducationalStream, CareerPath } from '@/lib/types';
import { MOCK_EDUCATIONAL_STREAMS, MOCK_CAREER_PATHS } from '@/lib/mock-data';
import { StreamCard } from '@/components/guidance/stream-card';
import { BookOpen, GraduationCap, Sparkles, Layers, ArrowRight, CheckCircle2, Award, Search, Filter } from 'lucide-react';
import Link from 'next/link';

const CLASS_12_DEGREE_MAPPING = [
  {
    code: 'mpc',
    streamName: 'MPC Students (Maths, Physics, Chem)',
    degrees: ['B.Tech / B.E. (CS, AI, Robotics, Aerospace, Civil)', 'B.Arch (Architecture)', 'B.Sc Data Science & Quantitative Finance', 'Commercial Pilot Training & Merchant Navy']
  },
  {
    code: 'bipc',
    streamName: 'BiPC Students (Biology, Physics, Chem)',
    degrees: ['MBBS / BDS (Doctor & Surgery)', 'B.Pharmacy & Pharm.D', 'B.Tech Biotechnology & Genetics', 'B.Sc Agriculture, Veterinary & Forensic Science']
  },
  {
    code: 'mec',
    streamName: 'MEC & Commerce (Maths, Econ, Commerce)',
    degrees: ['B.Com (Hons) & BBA / BMS', 'Chartered Accountant (CA) & CS', 'B.Sc Economics & Financial Analytics', 'Integrated IPM (IIM Indore/Rohtak)']
  },
  {
    code: 'hec',
    streamName: 'Arts & Humanities (HEC / Fine Arts)',
    degrees: ['Corporate Law (BA LLB / BBA LLB)', 'Clinical & Industrial Psychology', 'Journalism & Mass Communication', 'UI/UX & Fine Arts Design (B.Des)', 'Civil Services (UPSC IAS/IPS)']
  }
];

export default function AcademicGuidancePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'class10' | 'class12'>('all');
  const [streams, setStreams] = useState<EducationalStream[]>(MOCK_EDUCATIONAL_STREAMS);
  const [careers, setCareers] = useState<CareerPath[]>(MOCK_CAREER_PATHS);
  const [selectedStreamCode, setSelectedStreamCode] = useState<string>('mpc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch dynamically from Supabase API backend
    fetch('/api/v1/streams')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) setStreams(data.data);
      })
      .catch(() => {});

    fetch('/api/v1/careers')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) setCareers(data.data);
      })
      .catch(() => {});
  }, []);

  const filteredStreams = streams.filter(s =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeDegreeMapping = CLASS_12_DEGREE_MAPPING.find(d => d.code === selectedStreamCode) || CLASS_12_DEGREE_MAPPING[0];
  const matchedCareers = careers.filter(c => c.eligible_streams.includes(selectedStreamCode as any));

  return (
    <div className="space-y-8">
      {/* Unified Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-indigo-950/70 via-slate-900 to-purple-950/60 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Unified Lifelong Academic Guidance Module (Class 10 & 12 Degree Matcher)
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              Academic Stream & Degree Guidance Platform
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Explore post-Class 10 academic stream selection (MPC, BiPC, MEC, CEC, HEC, Vocational) and seamless Class 12 degree mapping in one unified interface.
            </p>
          </div>

          <Link
            href="/student/questionnaire"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-xs shadow-xl hover:scale-105 transition-all shrink-0"
          >
            Launch AI Vector Assessment <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          </Link>
        </div>

        {/* View Toggle Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Unified Stream & Degree View
            </button>
            <button
              onClick={() => setActiveTab('class10')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'class10' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Class 10 Stream Explorer ({streams.length})
            </button>
            <button
              onClick={() => setActiveTab('class12')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'class12' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Class 12 Degree Matcher
            </button>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 p-2 rounded-xl text-xs w-full sm:w-auto">
            <Search className="w-4 h-4 text-slate-400 ml-1" />
            <input
              type="text"
              placeholder="Search streams, degrees, or subjects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-white placeholder-slate-500 focus:outline-none w-full sm:w-64 text-xs"
            />
          </div>
        </div>
      </div>

      {/* Unified View */}
      {(activeTab === 'all' || activeTab === 'class12') && (
        <div className="glass-card rounded-3xl p-6 border border-slate-800 bg-slate-900/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                Class 10 Stream → Class 12 Degree Pathway Transition Matrix
              </h3>
              <p className="text-xs text-slate-400">Select an academic stream code to inspect higher education degree options and target career matches.</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {CLASS_12_DEGREE_MAPPING.map(d => (
                <button
                  key={d.code}
                  onClick={() => setSelectedStreamCode(d.code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                    selectedStreamCode === d.code
                      ? 'bg-purple-600 text-white border-purple-400 shadow'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {d.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Stream Degree Cards */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-purple-300 uppercase tracking-wider">
              Undergraduate Degree Mapping for {activeDegreeMapping.streamName}:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeDegreeMapping.degrees.map((deg, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                    #{idx + 1}
                  </div>
                  <span className="font-semibold">{deg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Matched Careers List */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h4 className="text-xs font-extrabold text-indigo-300 uppercase tracking-wider">
              Matched High-Growth Career Outcomes ({matchedCareers.length}):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchedCareers.map(c => (
                <div key={c.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{c.title}</span>
                    <span className="text-xs font-bold text-emerald-400">${c.avg_salary.mid.toLocaleString()} / yr</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Class 10 Streams Grid */}
      {(activeTab === 'all' || activeTab === 'class10') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              Dynamic Educational Stream Database ({filteredStreams.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStreams.map((stream) => (
              <StreamCard
                key={stream.id}
                stream={stream}
                onSelect={(code) => {
                  setSelectedStreamCode(code);
                  setActiveTab('all');
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
