import ScrollReveal from './ScrollReveal';
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Employment Background Checks',
    description: 'Thorough pre-employment screening covering criminal records, employment history, education credentials, and professional references.',
    audience: 'For HR teams and hiring managers',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
    title: 'Identity Verification',
    description: 'Robust identity authentication combining document verification, biometric matching, and database cross-referencing for absolute certainty.',
    audience: 'For onboarding and compliance teams',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 8h.01M9 8h.01" />
        <path d="M6 12h12" />
      </svg>
    ),
    title: 'Business Due Diligence',
    description: 'Comprehensive organisational screening including corporate records, beneficial ownership, financial health, and reputational analysis.',
    audience: 'For M&A, partnerships, and procurement',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Compliance Screening',
    description: 'Automated screening against global sanctions lists, PEP databases, watchlists, and adverse media to meet regulatory obligations.',
    audience: 'For legal and risk management',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <path d="M8 18l-2 2M16 18l2 2" />
      </svg>
    ),
    title: 'Continuous Monitoring',
    description: 'Ongoing surveillance of verified subjects to detect changes in criminal records, regulatory status, and compliance exposure over time.',
    audience: 'For long-term risk management',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'Custom Verification Workflows',
    description: 'Configurable screening packages tailored to your industry, role requirements, and risk tolerance — no one-size-fits-all approach.',
    audience: 'For enterprise and specialised industries',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={`section ${styles.section}`} aria-label="Our Services">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)', display: 'block' }}>
              Verify Right • Verify Fast
            </span>
            <h2 className="headline-md">Verification Services Built for Clarity</h2>
            <p className="body-md">
              Every service is designed to deliver actionable, transparent results — giving your organisation the confidence to move forward.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((service, i) => {
            const idMap: { [key: string]: string } = {
              'Employment Background Checks': 'employment-checks',
              'Identity Verification': 'identity-verification',
              'Business Due Diligence': 'due-diligence',
              'Compliance Screening': 'compliance-screening',
              'Continuous Monitoring': 'continuous-monitoring',
              'Custom Verification Workflows': 'custom-workflows',
            };
            const cardId = idMap[service.title] || service.title.toLowerCase().replace(/\s+/g, '-');

            return (
              <ScrollReveal key={service.title} delay={100 * (i + 1)}>
                <div id={cardId} className={`glass-panel glass-card-hover ${styles.card}`}>
                  <div className={styles.cardIcon}>{service.icon}</div>
                  <h3 className={`headline-sm ${styles.cardTitle}`}>{service.title}</h3>
                  <p className={`body-sm ${styles.cardDesc}`}>{service.description}</p>
                  <span className={`chip chip-primary ${styles.audience}`}>{service.audience}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
