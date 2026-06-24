import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './PlatformFeatures.module.css';

const features = [
  {
    title: 'Automated Background Checks',
    description: 'Intelligent automation handles routine verifications instantly, freeing your team to focus on complex cases that require human judgement.',
  },
  {
    title: 'Configurable Screening Workflows',
    description: 'Build verification packages tailored to specific roles, industries, or risk levels. No rigid templates — your rules, your process.',
  },
  {
    title: 'Seamless HR & ATS Integration',
    description: 'Connect directly with your existing recruiting and human resources systems. Verification becomes a natural step in your hiring flow.',
  },
  {
    title: 'Complete Audit Trails',
    description: 'Every action, decision, and data access is logged with timestamps and user attribution. Full visibility for compliance reviews.',
  },
  {
    title: 'Dashboard-Based Case Tracking',
    description: 'Monitor the status of every verification in real time. Track progress, flag issues, and manage cases from a single, clear interface.',
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Whether you process ten checks a month or ten thousand, the platform adapts to your volume without performance compromise.',
  },
];

export default function PlatformFeatures() {
  return (
    <section id="platform" className={`section ${styles.section}`} aria-label="Platform Features">
      <div className="container">
        <div className={styles.header}>
          <ScrollReveal>
            <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)', display: 'block' }}>
              The Platform
            </span>
            <h2 className="headline-md">Speed. Efficiency. Ensuring Precise Insights.</h2>
            <p className="body-md text-muted" style={{ maxWidth: '600px' }}>
              Our automated data pipelines reduce verification turnaround times by up to 60%, delivering actionable intelligence without compromising on thoroughness.
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          {/* Platform image */}
          <ScrollReveal className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/platform.png"
                alt="OzClu verification platform dashboard showing case tracking and status monitoring"
                width={600}
                height={420}
                quality={85}
                className={styles.platformImage}
              />
            </div>
            <div className={styles.statRow}>
              <div className={styles.stat}>
                <span className={styles.statValue}>00:04:23</span>
                <span className={styles.statLabel}>Avg. Clearance</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>99.8%</span>
                <span className={styles.statLabel}>Accuracy Rate</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature list */}
          <div className={styles.featureList}>
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={100 * (i + 1)}>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={`body-sm ${styles.featureDesc}`}>{feature.description}</p>
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
