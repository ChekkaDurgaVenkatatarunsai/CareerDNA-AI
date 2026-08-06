# CareerDNA AI — Backend

Database schema, seed data, and Supabase configuration for the CareerDNA AI platform.

## Structure

```
backend/
├── database/
│   └── schema.sql          # Complete PostgreSQL DDL + seed data (profiles, streams, careers, recommendations, pgvector)
├── supabase/
│   ├── schema.sql           # Supabase-specific schema subset
│   └── seed.sql             # Standalone seed INSERT statements
├── scripts/
│   └── seed-supabase.js     # Node.js script to programmatically seed Supabase via API
├── package.json
└── README.md
```

## Setup

### 1. Execute Database Schema

Open your [Supabase SQL Editor](https://supabase.com/dashboard) and paste + execute `database/schema.sql`.

This creates:
- Enum types (`user_role`, `target_stage`, `academic_stream`)
- Tables (`profiles`, `educational_streams`, `career_paths`, `user_recommendations`)
- Indexes (slug, user_id, role, pgvector IVFFLAT)
- RPC function (`match_career_paths`) for vector similarity search
- Seed data (8 educational streams + 10 career paths)

### 2. Programmatic Seeding (Alternative)

```bash
cd backend
npm install
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co SUPABASE_SERVICE_ROLE_KEY=your-key npm run seed
```

## Database Architecture

| Table | Purpose |
|-------|---------|
| `profiles` | User accounts with role (student/parent/mentor/admin) and stage mapping |
| `educational_streams` | Class 10 & 12 academic stream definitions (MPC, BiPC, MEC, etc.) |
| `career_paths` | Career taxonomy with salary, skills, RIASEC codes, and pgvector embeddings |
| `user_recommendations` | Stored AI career recommendations per user |
