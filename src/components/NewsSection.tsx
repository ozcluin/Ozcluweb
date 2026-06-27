'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './NewsSection.module.css';

const fallbackArticles = [
  {
    category: 'Compliance',
    date: 'Jun 10, 2026',
    title: 'Navigating Global Compliance in Background Screening',
    excerpt: 'Understanding the complex web of international regulations requires a clear, methodical approach to data verification and regulatory alignment.',
    featured: true,
    image: '/images/news-article.png',
  },
  {
    category: 'Hiring',
    date: 'May 28, 2026',
    title: 'The ROI of Transparent Hiring Practices',
    excerpt: 'Investing in thorough, transparent verification during the acquisition phase yields measurable returns in long-term organisational stability.',
    featured: false,
    image: '/images/news-article.png',
  },
  {
    category: 'Industry',
    date: 'May 15, 2026',
    title: 'Building Trust in a Digital-First World',
    excerpt: 'As interactions move entirely online, establishing factual baselines becomes the primary currency of reliable business relationships.',
    featured: false,
    image: '/images/news-article.png',
  },
  {
    category: 'Technology',
    date: 'Apr 30, 2026',
    title: 'Algorithmic Verification: Augmenting Human Judgement',
    excerpt: 'Exploring how machine learning enhances analytical rigour rather than replacing the necessity for expert human oversight in verification.',
    featured: false,
    image: '/images/news-article.png',
  },
];

interface NewsSectionProps {
  isTransparent?: boolean;
}

export default function NewsSection({ isTransparent = false }: NewsSectionProps) {
  const [displayedArticles, setDisplayedArticles] = useState(fallbackArticles);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const mapped = data.map((p: any, idx: number) => ({
              category: p.tags && p.tags.length > 0 ? p.tags[0] : 'Insight',
              date: new Date(p.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              title: p.title,
              excerpt: p.excerpt || 'Read our latest insights on hiring and verification.',
              featured: idx === 0,
              image: p.coverImage || '/images/news-article.png',
            }));
            setDisplayedArticles(mapped);
          }
        }
      } catch (err) {
        console.error('Failed to load posts dynamically:', err);
      }
    }
    fetchPosts();
  }, []);

  const featured = displayedArticles[0] || fallbackArticles[0];
  const items = displayedArticles.slice(1);

  return (
    <section id="news" className={`section ${styles.section} ${isTransparent ? styles.transparent : ''}`} aria-label="Latest Insights">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)', display: 'block' }}>
              Latest Insights
            </span>
            <h2 className={`headline-lg ${styles.title}`}>
              Insights into the Future of Verification
            </h2>
            <p className="body-md text-muted" style={{ maxWidth: '600px' }}>
              Discover the latest methodologies, industry shifts, and transparent practices defining the modern landscape of background screening.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured article */}
        <ScrollReveal delay={100}>
          <div className={`glass-panel glass-card-hover ${styles.featured}`}>
            <div className={styles.featuredImage}>
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                quality={85}
                className={styles.featuredImg}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.meta}>
                <span className="chip chip-primary">{featured.category}</span>
                <span className={`body-sm ${styles.date}`}>{featured.date}</span>
              </div>
              <h3 className={`headline-md ${styles.featuredTitle}`}>{featured.title}</h3>
              <p className={`body-md ${styles.featuredExcerpt}`}>{featured.excerpt}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Article grid */}
        {items.length > 0 && (
          <div className={styles.articlesGrid}>
            {items.map((article, i) => (
              <ScrollReveal key={article.title} delay={200 + (i * 100)}>
                <article className={`glass-panel glass-card-hover ${styles.articleCard}`}>
                  <div className={styles.meta}>
                    <span className="chip chip-primary" style={{ fontSize: '0.625rem' }}>{article.category}</span>
                    <span className={`body-sm ${styles.date}`}>{article.date}</span>
                  </div>
                  <h3 className={`headline-sm ${styles.articleTitle}`}>{article.title}</h3>
                  <p className={`body-sm ${styles.articleExcerpt}`}>{article.excerpt}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
