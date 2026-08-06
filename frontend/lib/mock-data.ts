import { EducationalStream, CareerPath } from './types';

export const MOCK_EDUCATIONAL_STREAMS: EducationalStream[] = [
  {
    id: 'str-mpc',
    code: 'mpc',
    title: 'MPC (Maths, Physics, Chemistry)',
    description: 'Core scientific stream laying technical foundation for Engineering, Computer Science, AI, Architecture, Aviation, and Quantitative Sciences.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Vernacular / Elective'],
    difficulty_level: 4,
    career_opportunities: [
      'Software Engineering & AI / ML',
      'Aerospace & Defense Research',
      'Civil & Infrastructure Engineering',
      'Pilot Training & Commercial Aviation',
      'Data Science & Quantitative Analytics',
      'Merchant Navy & Architecture'
    ],
    higher_education_options: ['B.Tech / B.E.', 'B.Arch', 'B.Sc Data Science', 'B.Sc Physics/Maths', 'Integrated M.Tech'],
    pros_cons: {
      advantages: [
        'Highest flexibility to pivot to tech, business, finance, or government service.',
        'High salary ceilings in software engineering, AI, and aviation.',
        'Develops strong logical and quantitative reasoning skills.'
      ],
      disadvantages: [
        'Rigorous academic workload requiring intensive problem solving.',
        'High competition in top entrance exams (JEE Main, Advanced, BITSAT).'
      ]
    },
    required_skills: ['Analytical Thinking', 'Mathematical Logic', 'Spatial Reasoning', 'Problem Solving'],
    riasec_alignment: ['Investigative (I)', 'Realistic (R)', 'Conventional (C)'],
    financial_demand: {
      avg_salary_range: '₹6.5 LPA - ₹45.0 LPA ($85,000 - $180,000)',
      future_growth_rate: '+23% CAGR (High Global Demand)'
    },
    entrance_exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'MHTCET', 'NATA', 'NDA'],
    top_colleges: ['IIT Bombay / Madras / Delhi', 'BITS Pilani', 'NIT Trichy / Surathkal', 'IIIT Hyderabad']
  },
  {
    id: 'str-bipc',
    code: 'bipc',
    title: 'BiPC (Biology, Physics, Chemistry)',
    description: 'Life sciences and medical foundation leading to Medicine, Dental Surgery, Biotechnology, Pharmacy, Genetics, and Agricultural Sciences.',
    subjects: ['Botany & Zoology', 'Physics', 'Chemistry', 'English', 'Elective'],
    difficulty_level: 4,
    career_opportunities: [
      'MBBS / Specialist Doctor',
      'Dental Surgery (BDS)',
      'Biotechnology & Genetic Research',
      'Pharmacy & Clinical Diagnostics',
      'Veterinary Medicine & Agriculture',
      'Paramedical & Healthcare Management'
    ],
    higher_education_options: ['MBBS', 'BDS', 'B.Pharm', 'B.Tech Biotechnology', 'B.Sc Agriculture', 'Pharm.D'],
    pros_cons: {
      advantages: [
        'Noble profession with high societal impact and stable long-term career security.',
        'Exploding demand in bioinformatics, personalized medicine, and biotech research.',
        'Low risk of AI job displacement.'
      ],
      disadvantages: [
        'Longer gestation period before practicing independently (MBBS + MD/MS).',
        'Intense competition for government medical seats in NEET-UG.'
      ]
    },
    required_skills: ['Memory Retention', 'Empathy & Patient Care', 'Microscopic Observation', 'Clinical Rigor'],
    riasec_alignment: ['Investigative (I)', 'Social (S)', 'Realistic (R)'],
    financial_demand: {
      avg_salary_range: '₹7.0 LPA - ₹50.0 LPA ($75,000 - $200,000)',
      future_growth_rate: '+19% CAGR (High Healthcare Expansion)'
    },
    entrance_exams: ['NEET-UG', 'AIIMS', 'JIPMER', 'ICAR AIEEA', 'BITSAT Biotech'],
    top_colleges: ['AIIMS New Delhi', 'CMC Vellore', 'JIPMER Puducherry', 'KMC Manipal', 'St. John\'s Medical College']
  },
  {
    id: 'str-mec',
    code: 'mec',
    title: 'MEC (Maths, Economics, Commerce)',
    description: 'Bridge between quantitative analytics and corporate financial acumen for Chartered Accountancy, Investment Banking, Data Economics, and Business Strategy.',
    subjects: ['Mathematics', 'Economics', 'Commerce & Accountancy', 'English'],
    difficulty_level: 3,
    career_opportunities: [
      'Chartered Accountant (CA) & CS',
      'Investment Banker & Equity Research',
      'Financial Analyst & Risk Management',
      'Actuarial Science & Statistics',
      'Corporate Law & Business Management'
    ],
    higher_education_options: ['B.Com (Hons)', 'BBA / BMS', 'B.Sc Economics', 'CA Foundation', 'Integrated IPM (IIM)'],
    pros_cons: {
      advantages: [
        'Math background unlocks high-paying financial engineering and data analytics roles.',
        'Direct gateway to global financial hubs and startup leadership.',
        'Versatile degree mapping.'
      ],
      disadvantages: [
        'Requires continuous updating of regulatory and tax frameworks.',
        'Professional certifications like CA require rigorous exam passes.'
      ]
    },
    required_skills: ['Financial Literacy', 'Quantitative Logic', 'Commercial Awareness', 'Data Interpretation'],
    riasec_alignment: ['Conventional (C)', 'Enterprising (E)', 'Investigative (I)'],
    financial_demand: {
      avg_salary_range: '₹6.0 LPA - ₹38.0 LPA ($70,000 - $160,000)',
      future_growth_rate: '+16% CAGR (Strong Corporate Growth)'
    },
    entrance_exams: ['CA Foundation', 'IPMAT', 'CUET-UG', 'NPAT', 'SET'],
    top_colleges: ['SRCC Delhi', 'Loyola College Chennai', 'Christ University', 'St. Xavier\'s Mumbai', 'IIM Indore (IPM)']
  },
  {
    id: 'str-cec',
    code: 'cec',
    title: 'CEC (Civics, Economics, Commerce)',
    description: 'Commercial and administrative foundation focusing on trade, law, governance, business operations, and digital marketing.',
    subjects: ['Civics & Political Science', 'Economics', 'Commerce', 'English'],
    difficulty_level: 2,
    career_opportunities: [
      'Business Administration & Operations',
      'Corporate Law (BA LLB)',
      'Digital Marketing & E-commerce Strategy',
      'Company Secretary (CS) & Tax Consultant',
      'Civil Services (UPSC / State PSC)'
    ],
    higher_education_options: ['B.Com', 'BBA', 'BA LLB', 'B.Voc E-Commerce', 'B.A. Economics'],
    pros_cons: {
      advantages: [
        'Smooth balance of workload allowing early focus on professional certifications or competitive prep.',
        'Direct practical application in running businesses and enterprises.'
      ],
      disadvantages: [
        'Without math, eligibility for technical data science or engineering degrees is limited.'
      ]
    },
    required_skills: ['Communication', 'Public Governance', 'Business Strategy', 'Negotiation'],
    riasec_alignment: ['Enterprising (E)', 'Conventional (C)', 'Social (S)'],
    financial_demand: {
      avg_salary_range: '₹5.0 LPA - ₹30.0 LPA ($55,000 - $130,000)',
      future_growth_rate: '+15% CAGR'
    },
    entrance_exams: ['CLAT', 'CUET-UG', 'CS Executive Entrance Test (CSEET)', 'IPMAT'],
    top_colleges: ['NLSIU Bengaluru', 'NALSAR Hyderabad', 'SRCC Delhi', 'Symbiosis Pune']
  },
  {
    id: 'str-hec',
    code: 'hec',
    title: 'HEC & Arts / Fine Arts',
    description: 'Humanities, social sciences, media, and creative design stream for Civil Services, Psychology, Journalism, Graphic/UI Design, and Policy Making.',
    subjects: ['History', 'Economics', 'Civics / Political Science', 'Psychology / Sociology'],
    difficulty_level: 2,
    career_opportunities: [
      'Civil Services (IAS, IPS, IFS)',
      'Clinical & Industrial Psychology',
      'Journalism & Broadcast Media',
      'UI/UX & Fine Arts / Fashion Design',
      'Policy Research & International Relations'
    ],
    higher_education_options: ['B.A. Political Science / History', 'B.Des (UI/UX / Fashion)', 'B.A. Journalism', 'B.Sc Psychology'],
    pros_cons: {
      advantages: [
        'Fosters deep critical thinking, human empathy, creative design, and strategic writing.',
        'Ideal foundation for UPSC Civil Services and top design academies.'
      ],
      disadvantages: [
        'Early career starting salaries can vary widely based on institution and specialization portfolio.'
      ]
    },
    required_skills: ['Critical Thinking', 'Empathy & Human Psychology', 'Creative Design', 'Storytelling & Writing'],
    riasec_alignment: ['Artistic (A)', 'Social (S)', 'Investigative (I)'],
    financial_demand: {
      avg_salary_range: '₹4.5 LPA - ₹28.0 LPA ($50,000 - $140,000)',
      future_growth_rate: '+18% CAGR (High Creative & Policy Demand)'
    },
    entrance_exams: ['UCEED', 'NID DAT', 'NIFT Entrance', 'CUET-UG', 'UPSC CSE (post-grad)'],
    top_colleges: ['NID Ahmedabad', 'NIFT Delhi', 'Lady Shri Ram College', 'St. Stephen\'s Delhi', 'TISS Mumbai']
  },
  {
    id: 'str-vocational',
    code: 'vocational',
    title: 'Vocational, ITI & Polytechnic Diploma',
    description: 'Applied skill development stream offering direct technical trade certifications, diploma lateral entry to B.Tech, and hands-on industry readiness.',
    subjects: ['Applied Trades (Electrical, Mechanical, IT, Web)', 'Applied Sciences', 'Practical Workshops'],
    difficulty_level: 2,
    career_opportunities: [
      'Junior Engineer (JE in Railway / CPWD)',
      'Lateral Entry B.Tech Engineer',
      'Industrial Automation Technician',
      'Web & Mobile Developer',
      'CNC Machine Operator & CAD Technician'
    ],
    higher_education_options: ['B.Tech Lateral Entry (2nd Year)', 'B.Voc Skill Degree', 'Advanced Diploma'],
    pros_cons: {
      advantages: [
        'Fastest entry into the workforce (within 2-3 years post Class 10).',
        'Direct practical hands-on experience valued by manufacturing and IT companies.',
        'Lateral entry saves 1 academic year.'
      ],
      disadvantages: [
        'Initial job roles are field/workshop oriented before moving into supervisory tiers.'
      ]
    },
    required_skills: ['Practical Tool Mastery', 'Hardware Diagnostics', 'CAD Software', 'Technical Troubleshooting'],
    riasec_alignment: ['Realistic (R)', 'Conventional (C)', 'Investigative (I)'],
    financial_demand: {
      avg_salary_range: '₹3.5 LPA - ₹18.0 LPA ($40,000 - $95,000)',
      future_growth_rate: '+14% CAGR (Infrastructure Growth)'
    },
    entrance_exams: ['POLYCET', 'ECET (for B.Tech lateral)', 'ITI All India Trade Test'],
    top_colleges: ['Government Polytechnic Hyderabad/Mumbai', 'VJTI Diploma wing', 'Pusa Polytechnic Delhi']
  }
];

export const MOCK_CAREER_PATHS: CareerPath[] = [
  {
    id: 'car-ai-eng',
    title: 'AI & Machine Learning Engineer',
    slug: 'ai-machine-learning-engineer',
    category: 'Technology & AI',
    min_education: 'ug',
    eligible_streams: ['mpc', 'polytechnic'],
    description: 'Architect, train, and deploy generative AI models, deep neural networks, and computer vision systems to solve complex autonomous tasks.',
    avg_salary: {
      entry: 85000,
      mid: 145000,
      senior: 220000
    },
    demand_growth_pct: 28.5,
    required_skills: ['Python', 'PyTorch / TensorFlow', 'Mathematics & Linear Algebra', 'NLP & LLMs', 'Distributed Computing'],
    riasec_code: 'IRC',
    entrance_exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE (for M.Tech)'],
    top_colleges: ['IIT Bombay', 'IIT Hyderabad', 'IIIT Hyderabad', 'Stanford University', 'CMU'],
    difficulty_level: 'High',
    work_life_balance: '8.5/10 (High Remote Potential)',
    govt_vs_private: {
      govt_pct: 15,
      private_pct: 85
    },
    automation_risk_score: 5,
    role_models: [
      {
        name: 'Demis Hassabis',
        title: 'CEO & Co-founder of Google DeepMind',
        bio: 'Pioneered AlphaGo and AlphaFold, revolutionizing AI for protein structure discovery.',
        quote: 'AI will be the ultimate tool to expand human intellect and solve global challenges.'
      },
      {
        name: 'Sam Altman',
        title: 'CEO of OpenAI',
        bio: 'Led the deployment of ChatGPT and advanced Transformer architectures worldwide.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose MPC Stream',
      'Crack JEE Main / BITSAT -> Enroll in B.Tech CS / AI',
      'Master Data Structures, Linear Algebra, PyTorch & MLOps',
      'Internship at AI Labs / Tech Giants',
      'Launch career as AI / ML Research Engineer'
    ]
  },
  {
    id: 'car-data-sci',
    title: 'Data Scientist & Predictive Analyst',
    slug: 'data-scientist-predictive-analyst',
    category: 'Data & Analytics',
    min_education: 'ug',
    eligible_streams: ['mpc', 'mec'],
    description: 'Extract actionable business intelligence from structured and unstructured big data using statistical modeling, SQL, and predictive machine learning.',
    avg_salary: {
      entry: 78000,
      mid: 130000,
      senior: 195000
    },
    demand_growth_pct: 22.0,
    required_skills: ['Python / R', 'SQL & Data Warehousing', 'Probability & Statistics', 'PowerBI / Tableau', 'Machine Learning'],
    riasec_code: 'ICE',
    entrance_exams: ['JEE Main', 'CUET-UG', 'ISI Admission Test', 'IPMAT'],
    top_colleges: ['Indian Statistical Institute (ISI)', 'IIT Kharagpur', 'BITS Pilani', 'UC Berkeley'],
    difficulty_level: 'Moderate',
    work_life_balance: '8.5/10 (High Remote Potential)',
    govt_vs_private: {
      govt_pct: 25,
      private_pct: 75
    },
    automation_risk_score: 12,
    role_models: [
      {
        name: 'DJ Patil',
        title: 'Former Chief Data Scientist of the US',
        bio: 'Co-coined the term "Data Scientist" and spearheaded government open data initiatives.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose MPC or MEC Stream',
      'Pursue B.Sc Statistics / B.Tech Data Science / B.Sc Economics',
      'Build portfolio with Kaggle competitions and SQL pipelines',
      'Join analytics consultancies or corporate data divisions'
    ]
  },
  {
    id: 'car-neuro-surgeon',
    title: 'Neurosurgeon & Specialist Doctor',
    slug: 'neurosurgeon-specialist-doctor',
    category: 'Healthcare & Medical',
    min_education: 'pg',
    eligible_streams: ['bipc'],
    description: 'Perform complex brain and spinal cord surgeries, diagnosing critical neurological disorders using advanced surgical robotics and MRI imaging.',
    avg_salary: {
      entry: 95000,
      mid: 190000,
      senior: 320000
    },
    demand_growth_pct: 18.2,
    required_skills: ['Neuro-anatomy', 'Surgical Dexterity', 'High-Pressure Decision Making', 'Patient Empathy', 'Clinical Diagnostics'],
    riasec_code: 'IRS',
    entrance_exams: ['NEET-UG', 'NEET-PG', 'INI-CET', 'USMLE (for US practice)'],
    top_colleges: ['AIIMS New Delhi', 'CMC Vellore', 'JIPMER Puducherry', 'Johns Hopkins University'],
    difficulty_level: 'Very High',
    work_life_balance: '6.0/10 (On-Call Emergencies)',
    govt_vs_private: {
      govt_pct: 45,
      private_pct: 55
    },
    automation_risk_score: 2,
    role_models: [
      {
        name: 'Dr. Ben Carson',
        title: 'World-Renowned Neurosurgeon',
        bio: 'Pioneered complex pediatric brain surgeries and conjoined twin separations.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose BiPC Stream',
      'Clear NEET-UG with top rank -> Complete 5.5-year MBBS degree',
      'Clear NEET-PG -> Complete MS General Surgery',
      'Complete M.Ch Neurosurgery super-specialization',
      'Join top super-specialty hospitals or medical research institutes'
    ]
  },
  {
    id: 'car-ca-finance',
    title: 'Chartered Accountant (CA) & Financial Strategist',
    slug: 'chartered-accountant-financial-strategist',
    category: 'Finance & Accounting',
    min_education: 'ug',
    eligible_streams: ['mec', 'cec', 'mpc'],
    description: 'Lead corporate financial auditing, tax compliance, mergers & acquisitions valuation, and strategic fiscal planning for multinational organizations.',
    avg_salary: {
      entry: 75000,
      mid: 135000,
      senior: 210000
    },
    demand_growth_pct: 16.5,
    required_skills: ['Financial Auditing', 'International Taxation', 'Corporate Law', 'Financial Modeling', 'Risk Assessment'],
    riasec_code: 'CEI',
    entrance_exams: ['CA Foundation', 'CA Intermediate', 'CA Final (ICAI)'],
    top_colleges: ['ICAI Institute', 'SRCC Delhi', 'St. Xavier\'s Mumbai', 'Loyola College'],
    difficulty_level: 'Very High',
    work_life_balance: '7.5/10 (Busy Season Peak)',
    govt_vs_private: {
      govt_pct: 20,
      private_pct: 80
    },
    automation_risk_score: 15,
    role_models: [
      {
        name: 'Kumar Mangalam Birla',
        title: 'Chairman of Aditya Birla Group',
        bio: 'Qualified CA who transformed his business empire into a $60B global conglomerate.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose MEC or CEC Stream',
      'Register for ICAI CA Foundation during Class 12',
      'Clear Foundation & Intermediate + Complete 2-Year Articleship Training',
      'Pass CA Final Exam -> Gain ICAI Fellowship',
      'Join Big 4 Accounting firms or corporate CFO tracks'
    ]
  },
  {
    id: 'car-corp-lawyer',
    title: 'Corporate Lawyer & M&A Attorney',
    slug: 'corporate-lawyer-ma-attorney',
    category: 'Legal & Policy',
    min_education: 'ug',
    eligible_streams: ['hec', 'cec', 'mec', 'mpc'],
    description: 'Structure international business deals, intellectual property rights, cross-border venture capital funding, and commercial dispute resolution.',
    avg_salary: {
      entry: 80000,
      mid: 150000,
      senior: 250000
    },
    demand_growth_pct: 17.8,
    required_skills: ['Contract Drafting', 'M&A Due Diligence', 'Negotiation', 'Legal Research', 'Regulatory Compliance'],
    riasec_code: 'EIA',
    entrance_exams: ['CLAT-UG', 'AILET', 'LSAT India', 'MHCET Law'],
    top_colleges: ['NLSIU Bengaluru', 'NALSAR Hyderabad', 'WBNUJS Kolkata', 'Harvard Law School'],
    difficulty_level: 'High',
    work_life_balance: '7.0/10',
    govt_vs_private: {
      govt_pct: 15,
      private_pct: 85
    },
    automation_risk_score: 10,
    role_models: [
      {
        name: 'Harish Salve',
        title: 'Senior Advocate & Global Legal Expert',
        bio: 'Renowned international lawyer representing high-stakes sovereign and corporate cases.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose HEC, CEC, or MEC Stream',
      'Crack CLAT exam -> Enroll in 5-Year Integrated BA LLB / BBA LLB at National Law University',
      'Complete law firm internships and moot court competitions',
      'Bar Council Registration -> Join tier-1 corporate law firms'
    ]
  },
  {
    id: 'car-ui-ux-designer',
    title: 'Product & UI/UX Designer',
    slug: 'product-ui-ux-designer',
    category: 'Design & Creative Media',
    min_education: 'ug',
    eligible_streams: ['hec', 'mpc', 'cec'],
    description: 'Design intuitive digital product interfaces, user experience flows, micro-animations, and visual design systems for web and mobile apps.',
    avg_salary: {
      entry: 68000,
      mid: 115000,
      senior: 175000
    },
    demand_growth_pct: 21.4,
    required_skills: ['Figma & Prototyping', 'User Research', 'Design Systems', 'Information Architecture', 'Interaction Design'],
    riasec_code: 'ASI',
    entrance_exams: ['UCEED', 'NID DAT', 'NIFT Entrance', 'CEED (Post-Grad)'],
    top_colleges: ['NID Ahmedabad', 'IDC IIT Bombay', 'Srishti Institute', 'RCA London'],
    difficulty_level: 'Moderate',
    work_life_balance: '9.0/10 (Excellent Remote Options)',
    govt_vs_private: {
      govt_pct: 5,
      private_pct: 95
    },
    automation_risk_score: 8,
    role_models: [
      {
        name: 'Jony Ive',
        title: 'Former Chief Design Officer at Apple',
        bio: 'Architected the iconic design language of iPhone, iPad, and MacBook lines.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose HEC, Fine Arts, or MPC Stream',
      'Clear UCEED / NID DAT -> Enroll in B.Des in Communication / Product Design',
      'Build strong Behance / Dribbble design system portfolio',
      'Join high-growth tech startups or global product design studios'
    ]
  },
  {
    id: 'car-ias-officer',
    title: 'Civil Servant (IAS / IPS / IFS Officer)',
    slug: 'civil-servant-ias-ips-ifs',
    category: 'Government & Public Administration',
    min_education: 'ug',
    eligible_streams: ['hec', 'cec', 'mpc', 'bipc', 'mec'],
    description: 'Formulate national public policies, oversee district governance, manage public infrastructure execution, and represent sovereign diplomacy globally.',
    avg_salary: {
      entry: 65000,
      mid: 110000,
      senior: 180000
    },
    demand_growth_pct: 10.0,
    required_skills: ['Public Policy', 'Crisis Management', 'Administrative Leadership', 'Constitutional Law', 'Ethics & Integrity'],
    riasec_code: 'SEC',
    entrance_exams: ['UPSC Civil Services Examination (Prelims, Mains, Interview)'],
    top_colleges: ['Open to any recognized Degree (DU, IIT, NLU, State Universities)'],
    difficulty_level: 'Very High',
    work_life_balance: '6.5/10 (High Responsibility)',
    govt_vs_private: {
      govt_pct: 100,
      private_pct: 0
    },
    automation_risk_score: 1,
    role_models: [
      {
        name: 'Dr. S. Jaishankar',
        title: 'Minister of External Affairs & Former IFS Officer',
        bio: 'Distinguished career diplomat shaping modern strategic geopolitics.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose HEC or any academic stream',
      'Complete Bachelor Degree (B.A., B.Tech, or B.Com)',
      'Prepare for UPSC CSE (General Studies + Optional Subject)',
      'Clear Prelims, Mains, and Personality Test Interview',
      'Undergo LBSNAA Training -> Appointed as Sub-Collector / IAS Officer'
    ]
  },
  {
    id: 'car-robotics-eng',
    title: 'Robotics & Automation Engineer',
    slug: 'robotics-automation-engineer',
    category: 'Engineering & Technology',
    min_education: 'ug',
    eligible_streams: ['mpc', 'polytechnic'],
    description: 'Design autonomous robots, industrial cobots, drone avionics, and smart mechatronic systems for space exploration and manufacturing.',
    avg_salary: {
      entry: 82000,
      mid: 140000,
      senior: 210000
    },
    demand_growth_pct: 25.0,
    required_skills: ['ROS (Robot Operating System)', 'Mechatronics & Kinematics', 'Embedded C++', 'Computer Vision', 'Control Systems'],
    riasec_code: 'RIE',
    entrance_exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE'],
    top_colleges: ['IIT Madras', 'IIT Kanpur', 'BITS Pilani', 'MIT Robotics Lab'],
    difficulty_level: 'High',
    work_life_balance: '8.0/10',
    govt_vs_private: {
      govt_pct: 30,
      private_pct: 70
    },
    automation_risk_score: 4,
    role_models: [
      {
        name: 'Marc Raibert',
        title: 'Founder of Boston Dynamics',
        bio: 'Pioneered dynamic legged robots like Spot and Atlas.'
      }
    ],
    roadmap_steps: [
      'Class 10 -> Choose MPC or Polytechnic Robotics',
      'Pursue B.Tech Mechatronics / Mechanical / CS',
      'Build hands-on ROS hardware drones or autonomous rovers',
      'Join robotics startups, ISRO/DRDO, or automotive tech centers'
    ]
  }
];
