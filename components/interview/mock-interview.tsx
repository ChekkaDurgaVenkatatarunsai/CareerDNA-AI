'use client';

import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Sparkles, Play, Award, CheckCircle, RefreshCw } from 'lucide-react';

export function MockInterview() {
  const [recording, setRecording] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswerText, setUserAnswerText] = useState('');
  const [evaluating, setEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<{
    score: number;
    clarity: string;
    strengths: string[];
    improvements: string[];
  } | null>(null);

  const QUESTIONS = [
    {
      role: 'AI & Machine Learning Engineer',
      question: 'Can you explain how a Transformer model utilizes multi-head self-attention mechanisms to process sequential text data?',
      hint: 'Focus on Query, Key, Value matrices and parallel processing advantages over RNNs.'
    },
    {
      role: 'Data Scientist',
      question: 'How do you handle severe class imbalance in a dataset when training a fraud detection machine learning model?',
      hint: 'Mention SMOTE oversampling, focal loss, precision-recall AUC, and cost-sensitive learning.'
    },
    {
      role: 'General Behavioral',
      question: 'Describe a challenging technical project where your team encountered a major hurdle. How did you resolve it?',
      hint: 'Use the STAR technique: Situation, Task, Action, Result.'
    }
  ];

  const q = QUESTIONS[currentQuestionIndex];

  const handleToggleRecord = () => {
    if (recording) {
      setRecording(false);
      setUserAnswerText(
        'In Transformer architectures, input tokens are projected into Query, Key, and Value vectors. Multi-head self-attention computes dot-product attention scores across multiple representation subspaces in parallel, allowing the model to capture long-range contextual relationships far better than recurrent networks.'
      );
    } else {
      setRecording(true);
      setUserAnswerText('Listening to your audio input...');
    }
  };

  const handleEvaluate = () => {
    setEvaluating(true);
    setTimeout(() => {
      setEvaluating(false);
      setFeedback({
        score: 92,
        clarity: 'Outstanding technical articulation and precise domain vocabulary.',
        strengths: [
          'Correctly identified Query, Key, and Value (QKV) mathematical projections.',
          'Articulated parallelization advantages over legacy RNN/LSTM models.'
        ],
        improvements: [
          'Could explicitly mention scaled dot-product division by sqrt(d_k) to prevent vanishing gradients.'
        ]
      });
    }, 1200);
  };

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Mic className="w-5 h-5 text-indigo-400" />
            AI Mock Interview Mentor (Voice & Technical Simulator)
          </h3>
          <p className="text-xs text-slate-400">
            Interactive speech-to-text interview simulator with real-time feedback scoring.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {QUESTIONS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentQuestionIndex(idx);
                setFeedback(null);
                setUserAnswerText('');
              }}
              className={`w-7 h-7 rounded-full text-xs font-bold border transition-all ${
                currentQuestionIndex === idx
                  ? 'bg-indigo-600 text-white border-indigo-400'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
            >
              Q{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* AI Question Display */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-purple-950/30 border border-indigo-500/20">
        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">
          {q.role} Mock Prompt
        </span>
        <h4 className="text-base font-bold text-white mb-2 leading-relaxed">
          "{q.question}"
        </h4>
        <p className="text-xs text-slate-400 italic">💡 Hint: {q.hint}</p>
      </div>

      {/* Speech Audio Simulator */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Your Voice Response Studio:
          </span>

          <div className="my-4 flex items-center justify-center gap-4">
            <button
              onClick={handleToggleRecord}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all ${
                recording
                  ? 'bg-rose-600 animate-pulse ring-4 ring-rose-500/30'
                  : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/30'
              }`}
            >
              {recording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>
          </div>

          <p className="text-center text-xs text-slate-400">
            {recording ? '🎙️ Recording... Speak your answer now' : 'Click microphone to record your audio answer'}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Transcribed Answer Text:
          </span>
          <textarea
            rows={4}
            value={userAnswerText}
            onChange={(e) => setUserAnswerText(e.target.value)}
            placeholder="Your spoken transcript will appear here..."
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono mb-3"
          />
          <button
            onClick={handleEvaluate}
            disabled={!userAnswerText || evaluating}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 text-white font-bold text-xs shadow-md disabled:opacity-40"
          >
            {evaluating ? 'Evaluating Answer...' : 'Evaluate Spoken Answer'}
          </button>
        </div>
      </div>

      {/* AI Feedback Report */}
      {feedback && (
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-sm text-white">AI Evaluation Score:</span>
            </div>
            <span className="text-xl font-extrabold text-emerald-400">{feedback.score} / 100</span>
          </div>

          <p className="text-xs text-slate-300 italic">"{feedback.clarity}"</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/30">
              <span className="font-bold text-emerald-400 block mb-1">Strong Technical Concepts:</span>
              <ul className="space-y-1 list-disc pl-4 text-slate-300">
                {feedback.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/30">
              <span className="font-bold text-amber-400 block mb-1">Areas to Polish:</span>
              <ul className="space-y-1 list-disc pl-4 text-slate-300">
                {feedback.improvements.map((imp, i) => (
                  <li key={i}>{imp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
