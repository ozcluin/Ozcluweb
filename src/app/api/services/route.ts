import { NextResponse } from 'next/server';
import { getServices } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const services = await getServices();
    const activeServices = services.filter(s => s.active);
    return NextResponse.json(activeServices);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
