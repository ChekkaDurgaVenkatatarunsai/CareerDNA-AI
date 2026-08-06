import { NextResponse } from 'next/server';
import { getCareerPaths } from '@/lib/supabase/db';

export async function GET() {
  try {
    const careers = await getCareerPaths();
    return NextResponse.json({ success: true, data: careers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'Server error' }, { status: 500 });
  }
}
