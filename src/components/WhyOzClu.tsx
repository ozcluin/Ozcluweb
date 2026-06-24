import ScrollReveal from './ScrollReveal';
import styles from './WhyOzClu.module.css';

const differentiators = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: 'Comprehensive Insight',
    desc: 'We go beyond surface-level checks. Our verification process synthesises multiple data sources to reveal a complete, accurate picture.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Speed & Efficiency',
    desc: 'Automated workflows and intelligent routing reduce turnaround times without sacrificing accuracy or thoroughness.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Regulatory Awareness',
    desc: 'Our processes are designed with compliance at the core, adapting to evolving requirements across jurisdictions and industries.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Technical Integration',
    desc: 'Seamless connectivity with existing HR, ATS, and recruiting platforms ensures verification fits naturally into your workflows.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Ethical Data Handling',
    desc: 'Sensitive information is treated with the respect it deserves. We maintain strict protocols for privacy, consent, and secure access.',
  },
];

export default function WhyOzClu() {
  return (
    <section id="why-ozclu" className={`section ${styles.section}`} aria-label="Why OzClu">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Narrative */}
          <div className={styles.narrative}>
            <ScrollReveal>
              <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'block' }}>
                Why OzClu
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className={`headline-lg ${styles.title}`}>
                Transparency Is Not a Feature. It&apos;s Our Foundation.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className={`body-lg ${styles.body}`}>
                Most verification services operate as black boxes. You submit a request, wait, and receive a result with little visibility into the process. OzClu was built differently.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className={`body-md ${styles.bodySecondary}`}>
                We believe that the organisations making critical decisions about people and partnerships deserve full clarity into how those decisions are informed. Every check, every source, every step is visible, auditable, and accountable.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <blockquote className={styles.pullquote}>
                <p>&ldquo;Unlocking peace of mind with a wealth of comprehensive insights...&rdquo;</p>
              </blockquote>
            </ScrollReveal>
          </div>

          {/* Right: Differentiator cards */}
          <div className={styles.cards}>
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={150 * (i + 1)}>
                <div className={`glass-panel glass-card-hover ${styles.card}`}>
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <div>
                    <h3 className={`headline-sm ${styles.cardTitle}`}>{item.title}</h3>
                    <p className={`body-sm ${styles.cardDesc}`}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
