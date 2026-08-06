import { NextResponse } from 'next/server';
import { computeAndSaveRecommendations } from '@/lib/supabase/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userId = body.userId || null;
    const questionnaire = body.questionnaire || body;

    const recommendations = await computeAndSaveRecommendations(userId, questionnaire);
    return NextResponse.json({ success: true, data: recommendations });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error?.message || 'Invalid payload'
    }, { status: 400 });
  }
}
