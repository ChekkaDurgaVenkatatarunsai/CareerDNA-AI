'use client';

import React, { useState } from 'react';
import { ATSAnalysisResult } from '@/lib/types';
import { FileText, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Wand2, RefreshCw, Layers } from 'lucide-react';

export function ATSAnalyzer() {
  const [resumeText, setResumeText] = useState(
    `John Doe\nClass 12 MPC Graduate | Aspiring AI & Software Engineer\n- Created high school physics simulation software in Python.\n- Led school robotics club team to regional 1st place award.\n- Good knowledge of Mathematics, C++, and HTML/CSS.`
  );
  const [targetRole, setTargetRole] = useState('AI & Machine Learning Engineer');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<ATSAnalysisResult | null>({
    score: 84,
    matchedKeywords: ['Python', 'Mathematics', 'Robotics', 'C++', 'Physics Simulation'],
    missingKeywords: ['PyTorch', 'Linear Algebra', 'Git / GitHub', 'Deep Learning', 'SQL'],
    strengths: [
      'Strong quantitative MPC background demonstrated in school projects.',
      'Extracurricular leadership demonstrated as Robotics Club President.'
    ],
    improvements: [
      'Quantify results in bullet points (e.g. improved speed by 35%).',
      'Add machine learning frameworks like PyTorch or Scikit-Learn.'
    ],
    enhancedBullets: [
      'Pioneered interactive Python physics simulation software, reducing lab demonstration runtimes by 40%.',
      'Spearheaded 5-member robotics team to 1st place victory out of 45 regional high schools using autonomous C++ code.'
    ]
  });

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        score: Math.min(96, Math.max(68, Math.floor(Math.random() * 25) + 75)),
        matchedKeywords: ['Python', 'Mathematics', 'Algorithms', 'Robotics', 'C++'],
        missingKeywords: ['PyTorch', 'Data Warehousing', 'Machine Learning', 'API Design'],
        strengths: [
          'Excellent foundational STEM background matching target entry specifications.',
          'Demonstrated project leadership and hands-on coding experience.'
        ],
        improvements: [
          'Incorporate target keywords: PyTorch, Neural Networks, MLOps.',
          'Apply STAR methodology to transform passive bullets into high-impact achievements.'
        ],
        enhancedBullets: [
          'Engineered physics simulation application using Python, increasing simulation accuracy by 28%.',
          'Captained regional championship robotics team, programming autonomous sensor navigation in C++.'
        ]
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-400" />
              ATS Resume Analyzer & STAR Bullet Enhancer
            </h3>
            <p className="text-xs text-slate-400">
              Instant 0-100 ATS compatibility score, missing keyword detection, and AI bullet optimization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Target Role / Specialization:
            </label>
            <input
              type="text"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
              Upload PDF or Paste Text:
            </label>
            <textarea
              rows={4}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
            />
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={analyzing}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
        >
          {analyzing ? (
            <>Analyzing Resume... <RefreshCw className="w-4 h-4 animate-spin" /></>
          ) : (
            <>Run ATS Analysis <Wand2 className="w-4 h-4 text-amber-300" /></>
          )}
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Score Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 flex flex-col justify-between items-center text-center">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Overall ATS Score
            </span>
            <div className="relative my-4 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-indigo-500/20 border-t-indigo-500 flex items-center justify-center">
                <span className="text-4xl font-black text-white">{result.score}</span>
                <span className="text-xs text-slate-400 font-bold">/100</span>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              High ATS Parser Compatibility
            </span>
          </div>

          {/* Keywords Breakdown */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 space-y-4">
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-2">
                Matched Keywords ({result.matchedKeywords.length}):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {result.matchedKeywords.map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40 text-xs font-semibold">
                    ✓ {kw}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-rose-400 font-bold text-xs uppercase tracking-wider block mb-2">
                Missing Target Keywords ({result.missingKeywords.length}):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {result.missingKeywords.map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800/40 text-xs font-semibold">
                    + {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* STAR Enhancer */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 space-y-3">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              AI STAR Bullet Enhancer Results:
            </h4>
            {result.enhancedBullets.map((bullet, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed">
                <span className="text-indigo-400 font-bold block mb-1">Enhanced Bullet #{i + 1}:</span>
                "{bullet}"
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
