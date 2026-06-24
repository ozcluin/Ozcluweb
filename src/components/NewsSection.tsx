import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './NewsSection.module.css';

const articles = [
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
  },
  {
    category: 'Industry',
    date: 'May 15, 2026',
    title: 'Building Trust in a Digital-First World',
    excerpt: 'As interactions move entirely online, establishing factual baselines becomes the primary currency of reliable business relationships.',
    featured: false,
  },
  {
    category: 'Technology',
    date: 'Apr 30, 2026',
    title: 'Algorithmic Verification: Augmenting Human Judgement',
    excerpt: 'Exploring how machine learning enhances analytical rigour rather than replacing the necessity for expert human oversight in verification.',
    featured: false,
  },
];

export default function NewsSection() {
  return (
    <section id="news" className={`section ${styles.section}`} aria-label="Latest Insights">
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
                src={articles[0].image!}
                alt={articles[0].title}
                fill
                quality={85}
                className={styles.featuredImg}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.meta}>
                <span className="chip chip-primary">{articles[0].category}</span>
                <span className={`body-sm ${styles.date}`}>{articles[0].date}</span>
              </div>
              <h3 className={`headline-md ${styles.featuredTitle}`}>{articles[0].title}</h3>
              <p className={`body-md ${styles.featuredExcerpt}`}>{articles[0].excerpt}</p>
              <a href="#" className={styles.readMore}>
                Read Full Analysis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Article grid */}
        <div className={styles.articlesGrid}>
          {articles.slice(1).map((article, i) => (
            <ScrollReveal key={article.title} delay={200 + (i * 100)}>
              <article className={`glass-panel glass-card-hover ${styles.articleCard}`}>
                <div className={styles.meta}>
                  <span className={`body-sm ${styles.date}`}>{article.date}</span>
                </div>
                <h3 className={`headline-sm ${styles.articleTitle}`}>{article.title}</h3>
                <p className={`body-sm ${styles.articleExcerpt}`}>{article.excerpt}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
