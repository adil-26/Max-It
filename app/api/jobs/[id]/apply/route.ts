import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return null;
  return createClient(url, serviceRoleKey);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Supabase environment variables are not configured' },
        { status: 500 }
      );
    }

    const { candidateId, coverletter } = await request.json();

    // Check if already applied
    const { data: existing } = await supabase
      .from('job_applications')
      .select('id')
      .eq('job_id', params.id)
      .eq('candidate_id', candidateId)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'Already applied to this job' },
        { status: 400 }
      );
    }

    // Create application
    const { data, error } = await supabase
      .from('job_applications')
      .insert({
        job_id: params.id,
        candidate_id: candidateId,
        cover_letter: coverletter,
        status: 'applied'
      })
      .select()
      .single();

    if (error) throw error;

    // Update job applications count
    await supabase.rpc('increment_applications_count', {
      job_id: params.id
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
