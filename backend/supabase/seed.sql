-- CAREERDNA AI / PATHFINDER AI - COMPLETE SUPABASE SEED SCRIPT
-- Execute this script in your Supabase SQL Editor to populate streams and career paths.

-- 1. SEED EDUCATIONAL STREAMS (Class 10 & 12 Foundation)
INSERT INTO public.educational_streams (code, title, description, subjects, difficulty_level, career_opportunities, higher_education_options, pros_cons)
VALUES
(
  'mpc',
  'MPC (Maths, Physics, Chemistry)',
  'Core scientific stream laying technical foundation for Engineering, Computer Science, AI, Architecture, Aviation, and Quantitative Sciences.',
  ARRAY['Mathematics', 'Physics', 'Chemistry', 'English', 'Vernacular / Elective'],
  4,
  ARRAY['Software Engineering & AI / ML', 'Aerospace & Defense Research', 'Civil & Infrastructure Engineering', 'Pilot Training & Commercial Aviation', 'Data Science & Quantitative Analytics', 'Merchant Navy & Architecture'],
  ARRAY['B.Tech / B.E.', 'B.Arch', 'B.Sc Data Science', 'B.Sc Physics/Maths', 'Integrated M.Tech'],
  '{"advantages": ["Highest flexibility to pivot to tech, business, finance, or government service.", "High salary ceilings in software engineering, AI, and aviation.", "Develops strong logical and quantitative reasoning skills."], "disadvantages": ["Rigorous academic workload requiring intensive problem solving.", "High competition in top entrance exams (JEE Main, Advanced, BITSAT)."]}'::jsonb
),
(
  'bipc',
  'BiPC (Biology, Physics, Chemistry)',
  'Life sciences and medical foundation leading to Medicine, Dental Surgery, Biotechnology, Pharmacy, Genetics, and Agricultural Sciences.',
  ARRAY['Botany & Zoology', 'Physics', 'Chemistry', 'English', 'Elective'],
  4,
  ARRAY['MBBS / Specialist Doctor', 'Dental Surgery (BDS)', 'Biotechnology & Genetic Research', 'Pharmacy & Clinical Diagnostics', 'Veterinary Medicine & Agriculture', 'Paramedical & Healthcare Management'],
  ARRAY['MBBS', 'BDS', 'B.Pharm', 'B.Tech Biotechnology', 'B.Sc Agriculture', 'Pharm.D'],
  '{"advantages": ["Noble profession with high societal impact and stable long-term career security.", "Exploding demand in bioinformatics, personalized medicine, and biotech research.", "Low risk of AI job displacement."], "disadvantages": ["Longer gestation period before practicing independently (MBBS + MD/MS).", "Intense competition for government medical seats in NEET-UG."]}'::jsonb
),
(
  'mec',
  'MEC (Maths, Economics, Commerce)',
  'Bridge between quantitative analytics and corporate financial acumen for Chartered Accountancy, Investment Banking, Data Economics, and Business Strategy.',
  ARRAY['Mathematics', 'Economics', 'Commerce & Accountancy', 'English'],
  3,
  ARRAY['Chartered Accountant (CA) & CS', 'Investment Banker & Equity Research', 'Financial Analyst & Risk Management', 'Actuarial Science & Statistics', 'Corporate Law & Business Management'],
  ARRAY['B.Com (Hons)', 'BBA / BMS', 'B.Sc Economics', 'CA Foundation', 'Integrated IPM (IIM)'],
  '{"advantages": ["Math background unlocks high-paying financial engineering and data analytics roles.", "Direct gateway to global financial hubs and startup leadership.", "Versatile degree mapping."], "disadvantages": ["Requires continuous updating of regulatory and tax frameworks.", "Professional certifications like CA require rigorous exam passes."]}'::jsonb
),
(
  'cec',
  'CEC (Civics, Economics, Commerce)',
  'Commercial and administrative foundation focusing on trade, law, governance, business operations, and digital marketing.',
  ARRAY['Civics & Political Science', 'Economics', 'Commerce', 'English'],
  2,
  ARRAY['Business Administration & Operations', 'Corporate Law (BA LLB)', 'Digital Marketing & E-commerce Strategy', 'Company Secretary (CS) & Tax Consultant', 'Civil Services (UPSC / State PSC)'],
  ARRAY['B.Com', 'BBA', 'BA LLB', 'B.Voc E-Commerce', 'B.A. Economics'],
  '{"advantages": ["Smooth balance of workload allowing early focus on professional certifications or competitive prep.", "Direct practical application in running businesses and enterprises."], "disadvantages": ["Without math, eligibility for technical data science or engineering degrees is limited."]}'::jsonb
),
(
  'hec',
  'HEC & Arts / Fine Arts',
  'Humanities, social sciences, media, and creative design stream for Civil Services, Psychology, Journalism, Graphic/UI Design, and Policy Making.',
  ARRAY['History', 'Economics', 'Civics / Political Science', 'Psychology / Sociology'],
  2,
  ARRAY['Civil Services (IAS, IPS, IFS)', 'Clinical & Industrial Psychology', 'Journalism & Broadcast Media', 'UI/UX & Fine Arts / Fashion Design', 'Policy Research & International Relations'],
  ARRAY['B.A. Political Science / History', 'B.Des (UI/UX / Fashion)', 'B.A. Journalism', 'B.Sc Psychology'],
  '{"advantages": ["Fosters deep critical thinking, human empathy, creative design, and strategic writing.", "Ideal foundation for UPSC Civil Services and top design academies."], "disadvantages": ["Early career starting salaries can vary widely based on institution and specialization portfolio."]}'::jsonb
),
(
  'vocational',
  'Vocational, ITI & Polytechnic Diploma',
  'Applied skill development stream offering direct technical trade certifications, diploma lateral entry to B.Tech, and hands-on industry readiness.',
  ARRAY['Applied Trades (Electrical, Mechanical, IT, Web)', 'Applied Sciences', 'Practical Workshops'],
  2,
  ARRAY['Junior Engineer (JE in Railway / CPWD)', 'Lateral Entry B.Tech Engineer', 'Industrial Automation Technician', 'Web & Mobile Developer', 'CNC Machine Operator & CAD Technician'],
  ARRAY['B.Tech Lateral Entry (2nd Year)', 'B.Voc Skill Degree', 'Advanced Diploma'],
  '{"advantages": ["Fastest entry into the workforce (within 2-3 years post Class 10).", "Direct practical hands-on experience valued by manufacturing and IT companies.", "Lateral entry saves 1 academic year."], "disadvantages": ["Initial job roles are field/workshop oriented before moving into supervisory tiers."]}'::jsonb
)
ON CONFLICT (code) DO NOTHING;

-- 2. SEED CAREER PATHS TAXONOMY
INSERT INTO public.career_paths (title, slug, category, min_education, eligible_streams, description, avg_salary, demand_growth_pct, required_skills, riasec_code, entrance_exams, top_colleges)
VALUES
(
  'AI & Machine Learning Engineer',
  'ai-machine-learning-engineer',
  'Technology & AI',
  'ug',
  ARRAY['mpc', 'polytechnic']::academic_stream[],
  'Architect, train, and deploy generative AI models, deep neural networks, and computer vision systems to solve complex autonomous tasks.',
  '{"entry": 85000, "mid": 145000, "senior": 220000}'::jsonb,
  28.5,
  ARRAY['Python', 'PyTorch / TensorFlow', 'Mathematics & Linear Algebra', 'NLP & LLMs', 'Distributed Computing'],
  'IRC',
  ARRAY['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE'],
  ARRAY['IIT Bombay', 'IIT Hyderabad', 'IIIT Hyderabad', 'Stanford University']
),
(
  'Data Scientist & Predictive Analyst',
  'data-scientist-predictive-analyst',
  'Data & Analytics',
  'ug',
  ARRAY['mpc', 'mec']::academic_stream[],
  'Extract actionable business intelligence from structured and unstructured big data using statistical modeling, SQL, and predictive machine learning.',
  '{"entry": 78000, "mid": 130000, "senior": 195000}'::jsonb,
  22.0,
  ARRAY['Python / R', 'SQL & Data Warehousing', 'Probability & Statistics', 'PowerBI / Tableau', 'Machine Learning'],
  'ICE',
  ARRAY['JEE Main', 'CUET-UG', 'ISI Admission Test', 'IPMAT'],
  ARRAY['Indian Statistical Institute (ISI)', 'IIT Kharagpur', 'BITS Pilani']
),
(
  'Neurosurgeon & Specialist Doctor',
  'neurosurgeon-specialist-doctor',
  'Healthcare & Medical',
  'pg',
  ARRAY['bipc']::academic_stream[],
  'Perform complex brain and spinal cord surgeries, diagnosing critical neurological disorders using advanced surgical robotics and MRI imaging.',
  '{"entry": 95000, "mid": 190000, "senior": 320000}'::jsonb,
  18.2,
  ARRAY['Neuro-anatomy', 'Surgical Dexterity', 'High-Pressure Decision Making', 'Patient Empathy', 'Clinical Diagnostics'],
  'IRS',
  ARRAY['NEET-UG', 'NEET-PG', 'INI-CET', 'USMLE'],
  ARRAY['AIIMS New Delhi', 'CMC Vellore', 'JIPMER Puducherry']
),
(
  'Chartered Accountant (CA) & Financial Strategist',
  'chartered-accountant-financial-strategist',
  'Finance & Accounting',
  'ug',
  ARRAY['mec', 'cec', 'mpc']::academic_stream[],
  'Lead corporate financial auditing, tax compliance, mergers & acquisitions valuation, and strategic fiscal planning for multinational organizations.',
  '{"entry": 75000, "mid": 135000, "senior": 210000}'::jsonb,
  16.5,
  ARRAY['Financial Auditing', 'International Taxation', 'Corporate Law', 'Financial Modeling', 'Risk Assessment'],
  'CEI',
  ARRAY['CA Foundation', 'CA Intermediate', 'CA Final (ICAI)'],
  ARRAY['ICAI Institute', 'SRCC Delhi', 'St. Xavier''s Mumbai']
)
ON CONFLICT (title) DO NOTHING;
