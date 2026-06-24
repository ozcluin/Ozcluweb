import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './PeopleFirst.module.css';

export default function PeopleFirst() {
  return (
    <section id="people-first" className={`section ${styles.section}`} aria-label="People First">
      <div className="container">
        <div className={styles.grid}>
          {/* Content */}
          <div className={styles.content}>
            <ScrollReveal>
              <div className={styles.iconBadge}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className={`headline-lg ${styles.title}`}>
                A Place Where Companies Enjoy Working With Us.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className={`body-lg ${styles.body}`}>
                We don&apos;t just verify data; we protect your culture. By ensuring a safe, transparent hiring process, we help build environments where people matter.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className={`body-md ${styles.bodySecondary}`}>
                Background verification affects real people — their careers, their livelihoods, their reputations. We believe every individual deserves a process that is fair, accurate, empathetic, and transparent. Our approach balances rigorous verification with genuine respect for the human beings at the centre of every check.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className={styles.principles}>
                <div className={styles.principle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Fair and unbiased screening practices</span>
                </div>
                <div className={styles.principle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Clear communication throughout the process</span>
                </div>
                <div className={styles.principle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Respectful handling of personal information</span>
                </div>
                <div className={styles.principle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Opportunity for context and correction</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={200} className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/people-first.png"
                alt="Diverse team of professionals collaborating in a modern workspace"
                width={560}
                height={440}
                quality={85}
                className={styles.image}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
