import { NextResponse } from 'next/server';
import { getSiteSettings } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const settings = await getSiteSettings();
    return NextResponse.json(settings || {
      siteName: 'OzClu Verification Services',
      tagline: 'Trust Starts with Visibility.',
      heroBackgroundImage: '',
      contactEmail: 'info@ozclu.com',
      contactPhone: '+61 2 8294 5738',
      address: 'Level 14, 167 Macquarie Street, Sydney NSW 2000, Australia',
      trustedCompanies: [],
      serviceCountries: [],
      socialLinks: { facebook: '', twitter: '', linkedin: '', instagram: '' },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
