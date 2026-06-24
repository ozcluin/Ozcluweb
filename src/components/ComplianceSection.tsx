import ScrollReveal from './ScrollReveal';
import styles from './ComplianceSection.module.css';

const complianceItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Responsible Disclosure & Authorisation',
    description: 'Every verification begins with informed consent. We ensure all screening follows proper authorisation flows and disclosure requirements.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'Adverse-Action Aware Workflows',
    description: 'Where applicable, our platform supports adverse-action notification processes, ensuring candidates are treated fairly and in accordance with legal requirements.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Audit-Friendly Records',
    description: 'Comprehensive, timestamped logs of every action taken during verification. Your compliance team can review and export records at any time.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Data Security & Controlled Access',
    description: 'Sensitive information is encrypted at rest and in transit. Role-based access controls ensure only authorised personnel can view verification data.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    title: 'Privacy-Conscious Handling',
    description: 'We collect only what is necessary, retain only what is required, and handle all personal information with the care and respect it demands.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Transparent Governance',
    description: 'Our operational policies, data handling practices, and governance framework are documented and available. We believe accountability starts with visibility.',
  },
];

export default function ComplianceSection() {
  return (
    <section id="compliance" className={`section ${styles.section}`} aria-label="Compliance and Data Responsibility">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={`label-md ${styles.label}`}>
              Compliance &amp; Data Responsibility
            </span>
            <h2 className={`headline-lg ${styles.title}`}>
              Built on Responsibility. Operated with Integrity.
            </h2>
            <p className={`body-lg ${styles.subtitle}`}>
              Verification involves sensitive information about real people. We take that responsibility seriously — embedding compliance, privacy, and ethical practice into every layer of our operations.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {complianceItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={100 * (i + 1)}>
              <div className={`glass-panel-dark ${styles.card}`}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={`body-sm ${styles.cardDesc}`}>{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
