# CareerDNA AI — Frontend

Next.js 14 App Router application for the CareerDNA AI career guidance platform.

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Structure

```
frontend/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar, Sidebar, Footer)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── api/v1/                   # API routes (careers, streams, recommendations)
│   └── (dashboard)/
│       ├── student/              # 7 student pages (guidance, questionnaire, etc.)
│       ├── parent/               # Parent guidance portal
│       └── admin/                # Admin CMS dashboard
├── components/                   # Reusable UI components
│   ├── layout/                   # Navbar, Sidebar, Footer
│   ├── guidance/                 # Stream cards, questionnaire, career cards
│   ├── interview/                # AI mock interview
│   ├── resume/                   # ATS analyzer
│   ├── roadmap/                  # Career roadmap DAG
│   ├── parent/                   # Parent radar chart
│   └── admin/                    # CMS table
├── lib/                          # Shared libraries
│   ├── ai/engine.ts              # Career compatibility scoring algorithm
│   ├── supabase/client.ts        # Supabase client initialization
│   ├── supabase/db.ts            # DB query helpers with mock fallback
│   ├── types.ts                  # TypeScript interfaces
│   ├── mock-data.ts              # Seed/fallback data
│   └── utils.ts                  # Utility functions
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript 5.5**
- **Tailwind CSS 3.4**
- **Supabase JS** (client-side queries with graceful mock fallback)
- **Recharts** (charts), **Framer Motion** (animations), **Lucide** (icons)
