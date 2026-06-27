import { NextResponse } from 'next/server';
import { getTeamMembers } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const members = await getTeamMembers();
    const activeMembers = members.filter(m => m.active);
    return NextResponse.json(activeMembers);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
