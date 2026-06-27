import { NextResponse } from 'next/server';
import { getFAQs } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const faqs = await getFAQs();
    const activeFaqs = faqs.filter(f => f.active);
    return NextResponse.json(activeFaqs);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
