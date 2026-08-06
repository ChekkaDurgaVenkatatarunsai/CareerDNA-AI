'use client';

import React from 'react';
import { GitFork, CheckCircle, ArrowRight, Flag, Star, BookOpen, GraduationCap, Award, Briefcase } from 'lucide-react';

interface RoadmapDAGProps {
  careerTitle?: string;
  steps?: string[];
}

export function RoadmapDAG({ careerTitle = 'AI & Machine Learning Engineer', steps }: RoadmapDAGProps) {
  const defaultSteps = [
    { title: 'Class 10 Graduation', desc: 'Secure 85%+ in Core Science & Maths. Choose MPC Stream.', icon: BookOpen, status: 'completed' },
    { title: 'Class 12 Academic Foundation', desc: 'Focus on Calculus, Physics, Physics labs. Prepare for JEE Main & BITSAT.', icon: GraduationCap, status: 'active' },
    { title: 'Undergraduate Degree (B.Tech CS / AI)', desc: 'Enroll in B.Tech Computer Science / AI. Master Python, Data Structures & Algorithms.', icon: Award, status: 'upcoming' },
    { title: 'Domain Specialization & Internships', desc: 'Build PyTorch portfolio models, participate in Kaggle, complete 6-month industry internship.', icon: Flag, status: 'upcoming' },
    { title: 'Entry-Level AI Engineer Role', desc: 'Join top tech companies or AI labs as AI Research Engineer ($85k+ starting salary).', icon: Briefcase, status: 'upcoming' }
  ];

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <GitFork className="w-5 h-5 text-indigo-400" />
            Interactive Career Roadmap DAG — {careerTitle}
          </h3>
          <p className="text-xs text-slate-400">Step-by-step milestone progression from current stage to target entry role.</p>
        </div>
        <span className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          Stage 2 of 5 In Progress
        </span>
      </div>

      <div className="relative pl-6 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
        {defaultSteps.map((step, idx) => {
          const Icon = step.icon;
          const isCompleted = step.status === 'completed';
          const isActive = step.status === 'active';

          return (
            <div key={idx} className="relative flex items-start gap-4 group">
              {/* Dot / Icon Node */}
              <div 
                className={`w-7 h-7 rounded-full flex items-center justify-center -ml-[31px] z-10 border transition-all ${
                  isCompleted ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/30' :
                  isActive ? 'bg-indigo-600 text-white border-indigo-400 ring-4 ring-indigo-500/20 animate-pulse' :
                  'bg-slate-900 text-slate-500 border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              <div className={`p-4 rounded-xl border flex-1 transition-all ${
                isActive ? 'bg-indigo-950/40 border-indigo-500/40 text-white' :
                isCompleted ? 'bg-slate-950/60 border-slate-800 text-slate-300' :
                'bg-slate-950/20 border-slate-800/60 text-slate-400'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm text-white group-hover:text-indigo-300 transition-colors">
                    Step {idx + 1}: {step.title}
                  </h4>
                  <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                    isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    isActive ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' :
                    'bg-slate-800 text-slate-500'
                  }`}>
                    {step.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
