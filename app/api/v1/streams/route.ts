import { NextResponse } from 'next/server';
import { getEducationalStreams } from '@/lib/supabase/db';

export async function GET() {
  try {
    const streams = await getEducationalStreams();
    return NextResponse.json({ success: true, data: streams });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'Server error' }, { status: 500 });
  }
}
