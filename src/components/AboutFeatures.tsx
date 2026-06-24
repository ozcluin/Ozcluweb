import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './AboutFeatures.module.css';

const features = [
  {
    label: 'Our Mission',
    title: 'Bringing Transparency to Every Decision',
    body: 'We founded OzClu on a simple principle: the organisations making critical decisions about people and partnerships deserve full visibility into how those decisions are informed. Every check, every source, every step — transparent and accountable.',
    bullets: [
      'Complete audit trails for every verification',
      'Source attribution on every finding',
      'Real-time case visibility for stakeholders',
    ],
    image: '/images/about-mission.png',
    imageAlt: 'Team of professionals reviewing verification data on a transparent display in a modern meeting room',
  },
  {
    label: 'Our Technology',
    title: 'Intelligent Automation, Human Oversight',
    body: 'Our platform combines automated data pipelines with expert human analysis. Routine verifications are processed instantly, while complex cases receive the careful attention they require — ensuring both speed and accuracy.',
    bullets: [
      'Automated workflows reduce turnaround by 60%',
      'Machine learning enhances pattern recognition',
      'Human analysts review edge cases and anomalies',
    ],
    image: '/images/about-technology.png',
    imageAlt: 'Close-up of a professional working on data analytics dashboard on a modern laptop',
  },
  {
    label: 'Global Capability',
    title: 'Verification Without Borders',
    body: 'Background verification doesn\'t stop at geographical boundaries. Our network spans multiple jurisdictions, enabling organisations to conduct thorough, compliant screening across regions with consistent quality and reliability.',
    bullets: [
      'Multi-jurisdictional screening coverage',
      'Localised compliance awareness per region',
      'Consistent methodology across all markets',
    ],
    image: '/images/about-global.png',
    imageAlt: 'World map visualization showing connected network nodes across continents in a modern office',
  },
  {
    label: 'Our Culture',
    title: 'Built by People Who Care About People',
    body: 'OzClu is more than a verification service — it\'s a team of professionals who genuinely believe in fairness, accuracy, and respect. We hire people who share our values because the work we do directly impacts real lives.',
    bullets: [
      'Ethics-first hiring across the organisation',
      'Continuous training on fair screening practices',
      'A culture of accountability and mutual respect',
    ],
    image: '/images/about-culture.png',
    imageAlt: 'Diverse team having a genuine conversation in a modern office lounge with natural lighting',
  },
];

export default function AboutFeatures() {
  return (
    <div className={styles.features}>
      {features.map((feature, i) => {
        const reversed = i % 2 !== 0;
        return (
          <section
            key={feature.label}
            className={`section ${styles.feature} ${reversed ? styles.reversed : ''}`}
            style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface-container-low)' }}
            aria-label={feature.title}
          >
            <div className="container">
              <div className={styles.grid}>
                {/* Content */}
                <div className={styles.content}>
                  <ScrollReveal>
                    <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'block' }}>
                      {feature.label}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal delay={100}>
                    <h2 className={`headline-lg ${styles.title}`}>{feature.title}</h2>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <p className={`body-lg ${styles.body}`}>{feature.body}</p>
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <ul className={styles.bullets}>
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className={styles.bullet}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>

                {/* Image */}
                <ScrollReveal delay={200} className={styles.imageCol}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={560}
                      height={400}
                      quality={85}
                      className={styles.image}
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
