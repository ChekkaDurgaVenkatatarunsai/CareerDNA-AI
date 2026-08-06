const { createClient } = require('@supabase/supabase-js');

// Read env variables safely
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-service-role-key';

console.log('Connecting to Supabase at:', supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);

const EDUCATIONAL_STREAMS = [
  {
    code: 'mpc',
    title: 'MPC (Maths, Physics, Chemistry)',
    description: 'Core scientific stream laying technical foundation for Engineering, Computer Science, AI, Architecture, Aviation, and Quantitative Sciences.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Vernacular / Elective'],
    difficulty_level: 4,
    career_opportunities: ['Software Engineering & AI / ML', 'Aerospace & Defense Research', 'Civil & Infrastructure Engineering', 'Pilot Training & Commercial Aviation', 'Data Science & Quantitative Analytics', 'Merchant Navy & Architecture'],
    higher_education_options: ['B.Tech / B.E.', 'B.Arch', 'B.Sc Data Science', 'B.Sc Physics/Maths', 'Integrated M.Tech'],
    pros_cons: {
      advantages: ['Highest flexibility to pivot to tech, business, finance, or government service.', 'High salary ceilings in software engineering, AI, and aviation.'],
      disadvantages: ['Rigorous academic workload requiring intensive problem solving.', 'High competition in top entrance exams (JEE Main, BITSAT).']
    }
  },
  {
    code: 'bipc',
    title: 'BiPC (Biology, Physics, Chemistry)',
    description: 'Life sciences and medical foundation leading to Medicine, Dental Surgery, Biotechnology, Pharmacy, Genetics, and Agricultural Sciences.',
    subjects: ['Botany & Zoology', 'Physics', 'Chemistry', 'English', 'Elective'],
    difficulty_level: 4,
    career_opportunities: ['MBBS / Specialist Doctor', 'Dental Surgery (BDS)', 'Biotechnology & Genetic Research', 'Pharmacy & Clinical Diagnostics', 'Veterinary Medicine & Agriculture', 'Paramedical & Healthcare Management'],
    higher_education_options: ['MBBS', 'BDS', 'B.Pharm', 'B.Tech Biotechnology', 'B.Sc Agriculture', 'Pharm.D'],
    pros_cons: {
      advantages: ['Noble profession with high societal impact and stable long-term career security.', 'Exploding demand in bioinformatics and biotech.'],
      disadvantages: ['Longer gestation period before practicing independently (MBBS + MD/MS).', 'Intense competition for government medical seats in NEET-UG.']
    }
  },
  {
    code: 'mec',
    title: 'MEC (Maths, Economics, Commerce)',
    description: 'Bridge between quantitative analytics and corporate financial acumen for Chartered Accountancy, Investment Banking, Data Economics, and Business Strategy.',
    subjects: ['Mathematics', 'Economics', 'Commerce & Accountancy', 'English'],
    difficulty_level: 3,
    career_opportunities: ['Chartered Accountant (CA) & CS', 'Investment Banker & Equity Research', 'Financial Analyst & Risk Management', 'Actuarial Science & Statistics', 'Corporate Law & Business Management'],
    higher_education_options: ['B.Com (Hons)', 'BBA / BMS', 'B.Sc Economics', 'CA Foundation', 'Integrated IPM (IIM)'],
    pros_cons: {
      advantages: ['Math background unlocks high-paying financial engineering and data analytics roles.', 'Direct gateway to global financial hubs.'],
      disadvantages: ['Requires continuous updating of regulatory and tax frameworks.', 'Professional certifications require rigorous exam passes.']
    }
  },
  {
    code: 'cec',
    title: 'CEC (Civics, Economics, Commerce)',
    description: 'Commercial and administrative foundation focusing on trade, law, governance, business operations, and digital marketing.',
    subjects: ['Civics & Political Science', 'Economics', 'Commerce', 'English'],
    difficulty_level: 2,
    career_opportunities: ['Business Administration & Operations', 'Corporate Law (BA LLB)', 'Digital Marketing & E-commerce Strategy', 'Company Secretary (CS) & Tax Consultant', 'Civil Services (UPSC / State PSC)'],
    higher_education_options: ['B.Com', 'BBA', 'BA LLB', 'B.Voc E-Commerce', 'B.A. Economics'],
    pros_cons: {
      advantages: ['Smooth balance of workload allowing early focus on professional certifications.', 'Direct practical application in business.'],
      disadvantages: ['Without math, eligibility for technical data science degrees is limited.']
    }
  },
  {
    code: 'hec',
    title: 'HEC & Arts / Fine Arts',
    description: 'Humanities, social sciences, media, and creative design stream for Civil Services, Psychology, Journalism, Graphic/UI Design, and Policy Making.',
    subjects: ['History', 'Economics', 'Civics / Political Science', 'Psychology / Sociology'],
    difficulty_level: 2,
    career_opportunities: ['Civil Services (IAS, IPS, IFS)', 'Clinical & Industrial Psychology', 'Journalism & Broadcast Media', 'UI/UX & Fine Arts / Fashion Design', 'Policy Research & International Relations'],
    higher_education_options: ['B.A. Political Science / History', 'B.Des (UI/UX / Fashion)', 'B.A. Journalism', 'B.Sc Psychology'],
    pros_cons: {
      advantages: ['Fosters deep critical thinking, human empathy, creative design, and strategic writing.', 'Ideal foundation for UPSC Civil Services.'],
      disadvantages: ['Starting salaries can vary widely based on institution and portfolio.']
    }
  },
  {
    code: 'vocational',
    title: 'Vocational, ITI & Polytechnic Diploma',
    description: 'Applied skill development stream offering direct technical trade certifications, diploma lateral entry to B.Tech, and hands-on industry readiness.',
    subjects: ['Applied Trades (Electrical, Mechanical, IT, Web)', 'Applied Sciences', 'Practical Workshops'],
    difficulty_level: 2,
    career_opportunities: ['Junior Engineer (JE in Railway / CPWD)', 'Lateral Entry B.Tech Engineer', 'Industrial Automation Technician', 'Web & Mobile Developer', 'CNC Machine Operator & CAD Technician'],
    higher_education_options: ['B.Tech Lateral Entry (2nd Year)', 'B.Voc Skill Degree', 'Advanced Diploma'],
    pros_cons: {
      advantages: ['Fastest entry into the workforce (within 2-3 years post Class 10).', 'Hands-on practical experience valued by manufacturing and IT.'],
      disadvantages: ['Initial job roles are field/workshop oriented before supervisory tiers.']
    }
  }
];

const CAREER_PATHS = [
  {
    title: 'AI & Machine Learning Engineer',
    slug: 'ai-machine-learning-engineer',
    category: 'Technology & AI',
    min_education: 'ug',
    eligible_streams: ['mpc', 'polytechnic'],
    description: 'Architect, train, and deploy generative AI models, deep neural networks, and computer vision systems to solve complex autonomous tasks.',
    avg_salary: { entry: 85000, mid: 145000, senior: 220000 },
    demand_growth_pct: 28.5,
    required_skills: ['Python', 'PyTorch / TensorFlow', 'Mathematics & Linear Algebra', 'NLP & LLMs', 'Distributed Computing'],
    riasec_code: 'IRC',
    entrance_exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE'],
    top_colleges: ['IIT Bombay', 'IIT Hyderabad', 'IIIT Hyderabad', 'Stanford University']
  },
  {
    title: 'Data Scientist & Predictive Analyst',
    slug: 'data-scientist-predictive-analyst',
    category: 'Data & Analytics',
    min_education: 'ug',
    eligible_streams: ['mpc', 'mec'],
    description: 'Extract actionable business intelligence from structured and unstructured big data using statistical modeling, SQL, and predictive machine learning.',
    avg_salary: { entry: 78000, mid: 130000, senior: 195000 },
    demand_growth_pct: 22.0,
    required_skills: ['Python / R', 'SQL & Data Warehousing', 'Probability & Statistics', 'PowerBI / Tableau', 'Machine Learning'],
    riasec_code: 'ICE',
    entrance_exams: ['JEE Main', 'CUET-UG', 'ISI Admission Test', 'IPMAT'],
    top_colleges: ['Indian Statistical Institute (ISI)', 'IIT Kharagpur', 'BITS Pilani']
  },
  {
    title: 'Neurosurgeon & Specialist Doctor',
    slug: 'neurosurgeon-specialist-doctor',
    category: 'Healthcare & Medical',
    min_education: 'pg',
    eligible_streams: ['bipc'],
    description: 'Perform complex brain and spinal cord surgeries, diagnosing critical neurological disorders using advanced surgical robotics and MRI imaging.',
    avg_salary: { entry: 95000, mid: 190000, senior: 320000 },
    demand_growth_pct: 18.2,
    required_skills: ['Neuro-anatomy', 'Surgical Dexterity', 'High-Pressure Decision Making', 'Patient Empathy', 'Clinical Diagnostics'],
    riasec_code: 'IRS',
    entrance_exams: ['NEET-UG', 'NEET-PG', 'INI-CET', 'USMLE'],
    top_colleges: ['AIIMS New Delhi', 'CMC Vellore', 'JIPMER Puducherry']
  },
  {
    title: 'Chartered Accountant (CA) & Financial Strategist',
    slug: 'chartered-accountant-financial-strategist',
    category: 'Finance & Accounting',
    min_education: 'ug',
    eligible_streams: ['mec', 'cec', 'mpc'],
    description: 'Lead corporate financial auditing, tax compliance, mergers & acquisitions valuation, and strategic fiscal planning for multinational organizations.',
    avg_salary: { entry: 75000, mid: 135000, senior: 210000 },
    demand_growth_pct: 16.5,
    required_skills: ['Financial Auditing', 'International Taxation', 'Corporate Law', 'Financial Modeling', 'Risk Assessment'],
    riasec_code: 'CEI',
    entrance_exams: ['CA Foundation', 'CA Intermediate', 'CA Final (ICAI)'],
    top_colleges: ['ICAI Institute', 'SRCC Delhi', 'St. Xavier\'s Mumbai']
  }
];

async function seedSupabase() {
  console.log('\n--- STARTING SUPABASE SEED ---');
  try {
    const { data: streamData, error: streamError } = await supabase
      .from('educational_streams')
      .upsert(EDUCATIONAL_STREAMS, { onConflict: 'code' });
    if (streamError) console.warn('Note on educational_streams:', streamError.message);
    else console.log('✓ Successfully seeded educational_streams table!');
  } catch (e) {
    console.warn('Stream seeding info:', e.message);
  }

  try {
    const { data: careerData, error: careerError } = await supabase
      .from('career_paths')
      .upsert(CAREER_PATHS, { onConflict: 'slug' });
    if (careerError) console.warn('Note on career_paths:', careerError.message);
    else console.log('✓ Successfully seeded career_paths table!');
  } catch (e) {
    console.warn('Career seeding info:', e.message);
  }
  console.log('--- SUPABASE SEED COMPLETED ---\n');
}

seedSupabase();
