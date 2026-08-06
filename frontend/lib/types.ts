export type UserRole = 'student' | 'parent' | 'mentor' | 'admin';

export type TargetStage = 
  | 'class_10' 
  | 'class_12' 
  | 'diploma' 
  | 'ug' 
  | 'pg' 
  | 'professional';

export type AcademicStream = 
  | 'mpc' 
  | 'bipc' 
  | 'mec' 
  | 'cec' 
  | 'hec' 
  | 'vocational' 
  | 'polytechnic' 
  | 'arts' 
  | 'other';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  stage: TargetStage;
  stream: AcademicStream;
  questionnaire_data?: QuestionnaireData;
  parent_code?: string;
  linked_student_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface EducationalStream {
  id: string;
  code: AcademicStream;
  title: string;
  description: string;
  subjects: string[];
  difficulty_level: number; // 1 - 5
  career_opportunities: string[];
  higher_education_options: string[];
  pros_cons: {
    advantages: string[];
    disadvantages: string[];
  };
  required_skills?: string[];
  riasec_alignment?: string[];
  financial_demand?: {
    avg_salary_range: string;
    future_growth_rate: string;
  };
  entrance_exams?: string[];
  top_colleges?: string[];
}

export interface SalaryRange {
  entry: number;
  mid: number;
  senior: number;
}

export interface RoleModel {
  name: string;
  title: string;
  bio: string;
  quote?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  slug: string;
  category: string;
  min_education: TargetStage;
  eligible_streams: AcademicStream[];
  description: string;
  avg_salary: SalaryRange;
  demand_growth_pct: number;
  required_skills: string[];
  riasec_code: string;
  entrance_exams: string[];
  top_colleges: string[];
  difficulty_level: 'Low' | 'Moderate' | 'High' | 'Very High';
  work_life_balance: string;
  govt_vs_private: {
    govt_pct: number;
    private_pct: number;
  };
  automation_risk_score?: number; // 0 - 100
  role_models?: RoleModel[];
  roadmap_steps?: string[];
}

export interface QuestionnaireData {
  currentStage: TargetStage;
  completedStream?: AcademicStream;
  enjoyedSubjects: string[];
  existingSkills: string[]; // Typed or selected skills
  activityPreferences: string[];
  workStylePreferences: string[];
  learningStyle: string;
  longTermAspirations: string[];
  environmentPreference: string;
}

export interface WhyThisCareerReasoning {
  interestMatch: string;
  skillSuitability: string;
  matchedUserSkills: string[];
  gapAnalysis: string[];
  challengesAndOpportunities: string;
  salaryProgression: {
    entry: string;
    mid: string;
    senior: string;
  };
  roleModels: RoleModel[];
}

export interface RecommendationResult {
  career: CareerPath;
  compatibilityScore: number; // 0 - 100
  whyThisCareer: WhyThisCareerReasoning;
  educationalPath: string;
  recommendedDegrees: string[];
  upcomingExams: string[];
  topColleges: string[];
  userMatchedSkills: string[];
  missingSkillsDelta: {
    critical: string[];
    moderate: string[];
    optional: string[];
  };
  stabilityIndex: string;
}

export interface ComparisonMatrixItem {
  metricName: string;
  values: Record<string, string | number>; // careerId -> value
}

export interface ATSAnalysisResult {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  strengths: string[];
  improvements: string[];
  enhancedBullets: string[];
}
