'use client';

import React, { useState } from 'react';
import { QuestionnaireData, TargetStage, AcademicStream } from '@/lib/types';
import { Sparkles, Check, ArrowRight, ArrowLeft, Brain, Plus, X, Wrench, Search, Code, BookOpen, HeartPulse, Stethoscope, Briefcase, Compass } from 'lucide-react';

interface QuestionnaireWizardProps {
  onComplete: (data: QuestionnaireData) => void;
}

const STAGES: { value: TargetStage; label: string; desc: string }[] = [
  { value: 'class_10', label: 'Class 10 Student', desc: 'Stream selection (MPC, BiPC, MEC, HEC, Vocational)' },
  { value: 'class_12', label: 'Class 12 Student', desc: 'Degree mapping (Engineering, MBBS, CA, Law, Design)' },
  { value: 'diploma', label: 'Diploma / Polytechnic', desc: 'Skill bridge & B.Tech lateral entry' },
  { value: 'ug', label: 'Undergraduate (UG)', desc: 'Domain specialization, internships, GATE/GRE' },
  { value: 'pg', label: 'Postgraduate (PG)', desc: 'R&D pathways, doctoral proposals, leadership' },
  { value: 'professional', label: 'Working Professional', desc: 'Mid-career pivot, executive upskilling' }
];

const STREAMS: { value: AcademicStream; label: string }[] = [
  { value: 'mpc', label: 'MPC (Maths, Physics, Chem)' },
  { value: 'bipc', label: 'BiPC (Biology, Physics, Chem)' },
  { value: 'mec', label: 'MEC (Maths, Econ, Commerce)' },
  { value: 'cec', label: 'CEC (Civics, Econ, Commerce)' },
  { value: 'hec', label: 'HEC & Arts / Fine Arts' },
  { value: 'vocational', label: 'Vocational / ITI / Polytechnic' }
];

const SUBJECTS = [
  'Mathematics', 'Biology', 'Physics', 'Chemistry', 'Computers & Coding', 
  'Economics', 'Commerce', 'History', 'Political Science', 'Fine Arts & Design', 'Languages'
];

// DYNAMIC SKILL MAP BASED ON SUBJECT / STREAM DOMAIN
const DOMAIN_SKILL_MAP: Record<string, string[]> = {
  biology: [
    'Microbiology', 'Genetics & DNA Analysis', 'Clinical Diagnostics', 'Surgical Dexterity', 
    'Biochemistry', 'Botany & Zoology', 'Pharmacology & Medicine', 'Anatomy', 'Patient Empathy & Care'
  ],
  math_tech: [
    'Python', 'C++', 'SQL & Data Warehousing', 'Linear Algebra & Calculus', 'Data Structures & Algorithms', 
    'ROS Robotics', 'Machine Learning', 'CAD & 3D Modeling', 'Hardware Electronics'
  ],
  commerce: [
    'Financial Accounting', 'Taxation & Auditing', 'Excel Financial Modeling', 'Stock Valuation & Equity', 
    'Corporate Law', 'Econometrics', 'Digital Marketing', 'Business Strategy'
  ],
  arts_design: [
    'Figma UI/UX Design', 'Public Policy Analysis', 'Constitutional Law', 'Psychological Counseling', 
    'Journalistic Writing', 'Graphic Design & Illustration', 'Creative Storytelling', 'International Relations'
  ]
};

// DYNAMIC ACTIVITY MAP BASED ON DOMAIN
const DOMAIN_ACTIVITY_MAP: Record<string, string[]> = {
  biology: [
    'Medical & Health Research', 'Clinical Patient Care', 'Lab Experiments & Dissection', 
    'Botanical & Plant Studies', 'Biotech & Genetic Engineering', 'Helping Sick People', 'Animal Care & Veterinary'
  ],
  math_tech: [
    'Programming & Coding', 'Algorithmic Problem Solving', 'Building Hardware / Robotics', 
    'Data Analytics & Stats', 'Mathematical Modeling & Physics Labs', 'Game & Web Development'
  ],
  commerce: [
    'Financial Planning & Investing', 'Business Strategy & Trading', 'Corporate Auditing & Accounts', 
    'Market Research & E-commerce', 'Negotiation & Commerce'
  ],
  arts_design: [
    'Creative UI/UX & Graphic Sketching', 'Public Speaking & Debating', 'Writing & Broadcast Journalism', 
    'Social Service & Policy Research', 'Legal Advocacy & Counseling'
  ]
};

const WORK_STYLES_MAP: Record<string, string[]> = {
  biology: ['Healthcare & Hospital Clinical Work', 'Research Laboratory Work', 'Biological Field Research', 'Pharmaceutical Care', 'Remote Medical Tele-consulting'],
  math_tech: ['Working with Computers & Software', 'Working with Machines & Hardware', 'Academic & Tech Research', 'Remote Engineering Work', 'Corporate Tech Office'],
  commerce: ['Business Management & Corporate', 'Financial Auditing & Banking', 'Office Work', 'Consulting & Strategy', 'Remote E-Commerce Operations'],
  arts_design: ['Creative Design Studio', 'Government & Administrative Services', 'Legal & Courtroom Advocacy', 'Media & Broadcast Studio', 'Field Work & Social Impact']
};

const LEARNING_STYLES = [
  'Theory-based', 'Practical & Hands-on Projects', 'Lab Experiments & Diagnostics', 'Video & Interactive Learning', 'Book & Case-based Studies'
];

const ASPIRATIONS_MAP: Record<string, string[]> = {
  biology: ['High Medical Impact', 'Doctor / Healthcare Specialist', 'Biotech Startup / Patent', 'Medical Research', 'Working Abroad / Global Practice', 'Job Security'],
  math_tech: ['High Salary ($100k+)', 'AI Innovation & Patents', 'Tech Startup / Business', 'Global Tech Career', 'Research & R&D', 'Flexible Remote Work'],
  commerce: ['Corporate Leadership / CFO', 'Chartered Accountant (CA)', 'Finance & Startup Business', 'High Salary', 'Global Investment Banking', 'Job Security'],
  arts_design: ['Government Service (IAS/IPS)', 'Top Corporate Lawyer', 'Creative Product Design Leader', 'Social & Policy Impact', 'Media & Broadcast Fame', 'Innovation']
};

const ENVIRONMENTS_MAP: Record<string, string[]> = {
  biology: ['Hospital / Medical Clinic', 'Research Laboratory', 'Biotech Institute', 'Pharmaceutical Unit', 'Outdoor & Veterinary Field'],
  math_tech: ['Corporate Tech Office', 'AI Research Lab', 'Robotics Workshop', 'Fully Remote', 'Hybrid Work'],
  commerce: ['Corporate Office / Financial Hub', 'Audit & Accounting Firm', 'Bank / Stock Exchange', 'Remote Business Desk'],
  arts_design: ['Design Studio / Media House', 'Law Chambers / Courtroom', 'Government Secretariat', 'NGO / Policy Research Unit', 'Hybrid Work']
};

export function QuestionnaireWizard({ onComplete }: QuestionnaireWizardProps) {
  const [step, setStep] = useState(1);
  const [customSkillInput, setCustomSkillInput] = useState('');
  const [data, setData] = useState<QuestionnaireData>({
    currentStage: 'class_12',
    completedStream: 'bipc',
    enjoyedSubjects: ['Biology', 'Chemistry'],
    existingSkills: ['Microbiology', 'Clinical Diagnostics', 'Biochemistry'],
    activityPreferences: ['Medical & Health Research', 'Clinical Patient Care'],
    workStylePreferences: ['Healthcare & Hospital Clinical Work', 'Research Laboratory Work'],
    learningStyle: 'Lab Experiments & Diagnostics',
    longTermAspirations: ['Doctor / Healthcare Specialist', 'High Medical Impact'],
    environmentPreference: 'Hospital / Medical Clinic'
  });

  // Determine active domain based on stream or enjoyed subjects
  const getActiveDomainKey = (): 'biology' | 'math_tech' | 'commerce' | 'arts_design' => {
    const stream = data.completedStream;
    const enjoyed = (data.enjoyedSubjects || []).map(s => s.toLowerCase());

    if (stream === 'bipc' || enjoyed.includes('biology')) return 'biology';
    if (stream === 'mec' || stream === 'cec' || enjoyed.includes('commerce') || enjoyed.includes('economics')) return 'commerce';
    if (stream === 'hec' || stream === 'arts' || enjoyed.includes('fine arts & design') || enjoyed.includes('history') || enjoyed.includes('political science')) return 'arts_design';
    return 'math_tech'; // default for MPC or math/computers
  };

  const domainKey = getActiveDomainKey();

  const activeSkills = DOMAIN_SKILL_MAP[domainKey] || DOMAIN_SKILL_MAP.math_tech;
  const activeActivities = DOMAIN_ACTIVITY_MAP[domainKey] || DOMAIN_ACTIVITY_MAP.math_tech;
  const activeWorkStyles = WORK_STYLES_MAP[domainKey] || WORK_STYLES_MAP.math_tech;
  const activeAspirations = ASPIRATIONS_MAP[domainKey] || ASPIRATIONS_MAP.math_tech;
  const activeEnvironments = ENVIRONMENTS_MAP[domainKey] || ENVIRONMENTS_MAP.math_tech;

  const toggleArrayItem = (key: keyof QuestionnaireData, item: string) => {
    const current = (data[key] as string[]) || [];
    if (current.includes(item)) {
      setData({ ...data, [key]: current.filter(i => i !== item) });
    } else {
      setData({ ...data, [key]: [...current, item] });
    }
  };

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = customSkillInput.trim();
    if (trimmed && !data.existingSkills.includes(trimmed)) {
      setData({ ...data, existingSkills: [...data.existingSkills, trimmed] });
      setCustomSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setData({ ...data, existingSkills: data.existingSkills.filter(s => s !== skillToRemove) });
  };

  const handleNext = () => {
    if (step < 8) {
      setStep(step + 1);
    } else {
      onComplete(data);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900/80 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
      {/* Dynamic Domain Badge Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Brain className="w-4 h-4 text-purple-400" />
            CareerDNA Vector Assessment — Step {step} of 8
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
            {step === 1 && 'Select Your Current Academic Life Stage'}
            {step === 2 && 'Select Enjoyed Subjects'}
            {step === 3 && `Type or Select ${domainKey === 'biology' ? 'Medical & Life Science' : domainKey === 'commerce' ? 'Finance & Business' : domainKey === 'arts_design' ? 'Arts, Law & Design' : 'Tech & STEM'} Skills`}
            {step === 4 && `Subject-Aligned Activities for ${domainKey.toUpperCase()}`}
            {step === 5 && `Work Style Preferences for ${domainKey.toUpperCase()}`}
            {step === 6 && 'Preferred Learning & Training Style'}
            {step === 7 && 'Long-Term Aspirations & Motivations'}
            {step === 8 && 'Ideal Workplace Environment'}
          </h2>
        </div>
        <div className="hidden sm:flex flex-col items-end gap-1">
          <span className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs font-semibold">
            Progress: {Math.round((step / 8) * 100)}%
          </span>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/40">
            Domain: {domainKey === 'biology' ? '🔬 Medical & Life Sciences' : domainKey === 'commerce' ? '💼 Commerce & Finance' : domainKey === 'arts_design' ? '🎨 Arts, Law & Design' : '💻 STEM & Engineering'}
          </span>
        </div>
      </div>

      {/* Step Progress Bar */}
      <div className="w-full h-1.5 bg-slate-800 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${(step / 8) * 100}%` }}
        />
      </div>

      {/* Step Contents */}
      <div className="min-h-[340px] mb-8">
        {/* STEP 1: STAGE & STREAM */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STAGES.map((s) => (
                <div
                  key={s.value}
                  onClick={() => setData({ ...data, currentStage: s.value })}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                    data.currentStage === s.value
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">{s.label}</h4>
                    <p className="text-xs text-slate-400">{s.desc}</p>
                  </div>
                  {data.currentStage === s.value && (
                    <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Select Academic Stream (Crucial for subject adaptive questions):
              </label>
              <div className="flex flex-wrap gap-2">
                {STREAMS.map(st => (
                  <button
                    key={st.value}
                    type="button"
                    onClick={() => setData({ ...data, completedStream: st.value })}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      data.completedStream === st.value
                        ? 'bg-indigo-600 text-white border-indigo-400'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: ENJOYED SUBJECTS */}
        {step === 2 && (
          <div>
            <p className="text-xs text-slate-400 mb-4">
              Select all academic subjects you genuinely enjoy studying (this adapts all subsequent questions to your chosen field):
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SUBJECTS.map((sub) => {
                const isSelected = data.enjoyedSubjects.includes(sub);
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => toggleArrayItem('enjoyedSubjects', sub)}
                    className={`p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{sub}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: SUBJECT-ADAPTIVE SKILLS INPUT */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Questions adapted for <strong>{domainKey === 'biology' ? 'Biology & Life Sciences' : domainKey === 'commerce' ? 'Commerce & Finance' : domainKey === 'arts_design' ? 'Arts & Law' : 'STEM & Computer Science'}</strong>. Type any specific skills you possess:
              </span>
            </div>

            {/* Custom Input Box */}
            <form onSubmit={handleAddCustomSkill} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Wrench className="w-4 h-4 text-indigo-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder={`Type a skill (e.g. ${domainKey === 'biology' ? 'Microbiology, Genetics, Anatomy' : 'Python, SQL, Robotics'})...`}
                  value={customSkillInput}
                  onChange={(e) => setCustomSkillInput(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-semibold"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow hover:bg-indigo-500 transition-colors flex items-center gap-1 shrink-0"
              >
                <Plus className="w-4 h-4" /> Add Skill
              </button>
            </form>

            {/* Your Added Skills Pills */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Your Added Skills ({data.existingSkills.length}):
              </span>
              <div className="flex flex-wrap gap-2 min-h-[48px] p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                {data.existingSkills.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">No skills added yet. Type above or click subject-aligned tags below.</span>
                ) : (
                  data.existingSkills.map((sk) => (
                    <span
                      key={sk}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-950 to-purple-950 text-indigo-200 border border-indigo-500/40 text-xs font-semibold"
                    >
                      {sk}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(sk)}
                        className="hover:text-rose-400 text-slate-400 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Subject-Specific Suggested Skill Tags */}
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Subject-Aligned Suggested Skills ({domainKey.toUpperCase()}):
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSkills.map((sk) => {
                  const isAdded = data.existingSkills.includes(sk);
                  return (
                    <button
                      key={sk}
                      type="button"
                      onClick={() => toggleArrayItem('existingSkills', sk)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                        isAdded
                          ? 'bg-emerald-600 text-white border-emerald-400'
                          : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {isAdded ? <Check className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-slate-500" />}
                      {sk}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: SUBJECT-ADAPTIVE ACTIVITIES */}
        {step === 4 && (
          <div>
            <p className="text-xs text-slate-400 mb-4">
              Select activities aligned with your chosen field (<strong>{domainKey.toUpperCase()}</strong>):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeActivities.map((act) => {
                const isSelected = data.activityPreferences.includes(act);
                return (
                  <button
                    key={act}
                    type="button"
                    onClick={() => toggleArrayItem('activityPreferences', act)}
                    className={`p-3.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-purple-600/30 border-purple-500 text-purple-200'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{act}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-purple-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: SUBJECT-ADAPTIVE WORK STYLES */}
        {step === 5 && (
          <div>
            <p className="text-xs text-slate-400 mb-4">
              What daily work environments fit your domain preference (<strong>{domainKey.toUpperCase()}</strong>)?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeWorkStyles.map((ws) => {
                const isSelected = data.workStylePreferences.includes(ws);
                return (
                  <button
                    key={ws}
                    type="button"
                    onClick={() => toggleArrayItem('workStylePreferences', ws)}
                    className={`p-3.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{ws}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: LEARNING STYLE */}
        {step === 6 && (
          <div>
            <p className="text-xs text-slate-400 mb-4">
              How do you absorb new concepts most effectively?
            </p>
            <div className="space-y-2.5 max-w-xl">
              {LEARNING_STYLES.map((ls) => (
                <div
                  key={ls}
                  onClick={() => setData({ ...data, learningStyle: ls })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    data.learningStyle === ls
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="font-semibold text-xs">{ls}</span>
                  {data.learningStyle === ls && <Check className="w-4 h-4 text-indigo-400" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 7: SUBJECT-ADAPTIVE ASPIRATIONS */}
        {step === 7 && (
          <div>
            <p className="text-xs text-slate-400 mb-4">
              Select primary long-term career aspirations for <strong>{domainKey.toUpperCase()}</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeAspirations.map((asp) => {
                const isSelected = data.longTermAspirations.includes(asp);
                return (
                  <button
                    key={asp}
                    type="button"
                    onClick={() => toggleArrayItem('longTermAspirations', asp)}
                    className={`p-3.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-600/30 border-amber-500 text-amber-200'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{asp}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 8: SUBJECT-ADAPTIVE WORKPLACE ENVIRONMENT */}
        {step === 8 && (
          <div>
            <p className="text-xs text-slate-400 mb-4">
              Where do you see yourself thriving day-to-day?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {activeEnvironments.map((env) => (
                <div
                  key={env}
                  onClick={() => setData({ ...data, environmentPreference: env })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    data.environmentPreference === env
                      ? 'bg-indigo-600/30 border-indigo-500 text-white font-bold'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs">{env}</span>
                  {data.environmentPreference === env && <Check className="w-4 h-4 text-indigo-400" />}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-6">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          {step === 8 ? (
            <>
              Generate Recommendations <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            </>
          ) : (
            <>
              Next Step <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
