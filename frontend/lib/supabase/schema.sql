-- ============================================================================
-- CAREERDNA AI / PATHFINDER AI - COMPLETE DATABASE SCHEMA & DDL SPECIFICATION
-- Database Engine: PostgreSQL 15+ / Supabase (with pgvector extension)
-- ============================================================================

-- 1. ENABLE EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

-- 2. ENUM TYPES DEFINITION
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('student', 'parent', 'mentor', 'admin');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE target_stage AS ENUM ('class_10', 'class_12', 'diploma', 'ug', 'pg', 'professional');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE academic_stream AS ENUM ('mpc', 'bipc', 'mec', 'cec', 'hec', 'vocational', 'polytechnic', 'arts', 'other');
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 3. PROFILES TABLE (User Accounts & Role Mapping)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role user_role DEFAULT 'student',
  stage target_stage NOT NULL DEFAULT 'class_12',
  stream academic_stream DEFAULT 'mpc',
  questionnaire_data JSONB DEFAULT '{}'::jsonb,
  parent_code TEXT,
  linked_student_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. DYNAMIC EDUCATIONAL STREAMS TABLE (Class 10 & 12 Academic Guidance)
CREATE TABLE IF NOT EXISTS public.educational_streams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code academic_stream UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  subjects TEXT[] NOT NULL,
  difficulty_level INT CHECK (difficulty_level BETWEEN 1 AND 5),
  career_opportunities TEXT[] NOT NULL,
  higher_education_options TEXT[] NOT NULL,
  pros_cons JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. CAREER PATHS TAXONOMY TABLE (Lifelong Career Database with pgvector)
CREATE TABLE IF NOT EXISTS public.career_paths (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  min_education target_stage NOT NULL,
  eligible_streams academic_stream[] NOT NULL,
  description TEXT NOT NULL,
  avg_salary JSONB NOT NULL,
  demand_growth_pct NUMERIC(5,2),
  required_skills TEXT[] NOT NULL,
  riasec_code VARCHAR(6) NOT NULL,
  entrance_exams TEXT[],
  top_colleges TEXT[],
  embedding vector(1536),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. USER RECOMMENDATIONS & REASONING TABLE
CREATE TABLE IF NOT EXISTS public.user_recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  career_id UUID REFERENCES public.career_paths(id) ON DELETE CASCADE,
  compatibility_score NUMERIC(5,2) NOT NULL,
  why_this_career JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_career_paths_slug ON public.career_paths(slug);
CREATE INDEX IF NOT EXISTS idx_user_recommendations_user ON public.user_recommendations(user_id);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_career_paths_vector ON public.career_paths USING ivfflat (embedding vector_cosine_ops);

-- 8. PGVECTOR MATCH RPC FUNCTION
CREATE OR REPLACE FUNCTION match_career_paths (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  slug TEXT,
  category TEXT,
  description TEXT,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    cp.id,
    cp.title,
    cp.slug,
    cp.category,
    cp.description,
    1 - (cp.embedding <=> query_embedding) AS similarity
  FROM public.career_paths cp
  WHERE 1 - (cp.embedding <=> query_embedding) > match_threshold
  ORDER BY cp.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
