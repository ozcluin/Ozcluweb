import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = await getBlogPosts();
    const publishedPosts = posts.filter(p => p.status === 'published');
    return NextResponse.json(publishedPosts);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
