# 🚀 CareerDNA AI (PathFinder AI) — Lifelong AI Career Guidance & Intelligence Platform

[![Next.js 14](https://img.shields.io/badge/Next.js-14_App_Router-black?logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-pgvector_PostgreSQL-emerald?logo=supabase)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

**CareerDNA AI (PathFinder AI)** is an enterprise-grade, multi-tenant, AI-native career intelligence, navigation, and skill development platform designed to act as a lifelong AI career counselor across six distinct life stages:
1. **Class 10 Graduates**: Stream selection (MPC, BiPC, MEC, CEC, HEC, Vocational, Polytechnic, ITI, Fine Arts).
2. **Class 12 Graduates**: Stream-aligned degree mapping (Engineering, Medicine, Law, CA/CS, Design, Humanities, Civil Services).
3. **Diploma / Polytechnic Students**: Skill bridge modules, lateral entry degree pathways, and direct workforce readiness.
4. **Undergraduate (UG) Students**: Domain specializations, internship matching, competitive exam trackers (GATE, GRE, CAT).
5. **Postgraduate (PG) Students**: R&D pathways, doctoral proposals, and executive leadership tracks.
6. **Working Professionals**: Mid-career pivot matrix, executive upskilling, and skill-gap delta analysis.

---

## 🌟 Key Platform Capabilities

- **Unified Academic Guidance Explorer (`/student/academic-guidance`)**: Unified Class 10 stream explorer and Class 12 degree matcher in one cohesive view.
- **Subject-Adaptive 8-Step Questionnaire (`/student/questionnaire`)**: Automatically adapts subsequent questions (Skills, Activities, Work Styles, Aspirations) based on selected stream (Biology, Tech/MPC, Commerce, Arts).
- **Type or Select Custom Skills**: Typed skills are dynamically matched against career requirements in real-time.
- **Transparent "Why This Career?" Reasoning Cards (`/student/recommendations`)**: 0-100% compatibility scores, Interest Match, Skill Suitability, Matched User Skills vs Missing Skills Delta (Critical, Moderate, Optional), and Role Models.
- **Side-by-Side Career Comparison Matrix (`/student/career-compare`)**: Select up to 4 careers to compare eligibility, salary, difficulty, work-life balance, and market growth.
- **Interactive Career Roadmap DAG (`/student/roadmap`)**: Milestone progression flow from current stage to entry role.
- **ATS Resume Analyzer (`/student/resume-analyzer`)**: 0-100 score, missing keyword detector, and AI STAR bullet enhancer.
- **AI Mock Interview Mentor (`/student/interview-mentor`)**: Voice & audio simulator with real-time speech evaluation.
- **Parent Guidance Portal (`/parent`)**: Student code pairing, jargon-free aptitude radar charts, and printable monthly digest.
- **Admin CMS Dashboard (`/admin`)**: CRUD panels for editing streams, career taxonomies, exam dates, and monitoring API stats.

---

## 🏗️ Tech Stack & Architecture

- **Frontend**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Lucide Icons, Recharts, Framer Motion.
- **Backend & Database**: Next.js API Routes, Supabase PostgreSQL, `pgvector` (1536-dim embeddings), Supabase RPC vector search.
- **Database Schema**: Full DDL and seed data in [`schema.sql`](./schema.sql).

---

## 🛠️ Quick Start & Local Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/ChekkaDurgaVenkatatarunsai/CareerDNA-AI.git
cd CareerDNA-AI
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3005
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
OPENAI_API_KEY=sk-proj-your-openai-key
```

### 3. Initialize Supabase Database
Copy and execute [`schema.sql`](./schema.sql) in your [Supabase SQL Editor](https://supabase.com/dashboard).

### 4. Run Development Server
```bash
npm run dev -- -p 3005
```
Open **[http://localhost:3005](http://localhost:3005)** in your browser.

---

## 📄 License
Licensed under the MIT License.
