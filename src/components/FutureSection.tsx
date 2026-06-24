import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './FutureSection.module.css';

export default function FutureSection() {
  return (
    <section id="future" className={`section ${styles.section}`} aria-label="Future of Verification">
      <div className="container">
        <div className={styles.wrapper}>
          {/* Decorative shapes */}
          <div className={styles.decorLeft} aria-hidden="true">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.15">
              <path d="M60 0L73.09 46.91L120 60L73.09 73.09L60 120L46.91 73.09L0 60L46.91 46.91L60 0Z" fill="#5CB85C" />
            </svg>
          </div>
          <div className={styles.decorRight} aria-hidden="true">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.1">
              <circle cx="40" cy="40" r="38" stroke="#5CB85C" strokeWidth="2" strokeDasharray="8 6" />
            </svg>
          </div>

          <ScrollReveal>
            <div className={styles.inner}>
              <div className={styles.iconBadge}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <path d="M11 8v6l3 3" />
                </svg>
              </div>

              <h2 className={`display-lg ${styles.title}`}>
                Fully Automated.<br />Fully Optimised.
              </h2>

              <p className={`body-lg ${styles.body}`}>
                Experience the next generation of background verification. We are building toward a future of deeper automation, smarter integrations, and even greater transparency — powered by technology, designed for absolute clarity.
              </p>

              <Link href="/contact" className={`btn btn-primary btn-lg ${styles.cta}`} id="future-cta">
                Coming Soon
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
