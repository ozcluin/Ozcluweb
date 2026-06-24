import ScrollReveal from './ScrollReveal';
import styles from './HowItWorks.module.css';

interface Step {
  id: string;
  label: string;
  tooltipTitle: string;
  description: string;
  icon: string;
  colorClass?: string; // Custom color override for AI steps
}

interface Phase {
  name: string;
  colorClass: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    name: 'ORDER & SUBMISSION',
    colorClass: styles.phaseOrder,
    steps: [
      {
        id: 'company-hr',
        label: 'Company HR',
        tooltipTitle: 'Initiate Request',
        description: 'HR initiates a background check request through the secure dashboard or via direct API integration.',
        icon: 'building',
      },
      {
        id: 'creates-order',
        label: 'Creates Order',
        tooltipTitle: 'Define Scope',
        description: 'HR selects the specific screening package (e.g., identity, employment history, or compliance checks).',
        icon: 'clipboard',
      },
      {
        id: 'invite-sent',
        label: 'Invite Sent',
        tooltipTitle: 'Automated Outreach',
        description: 'An encrypted email invite is automatically sent to the candidate with login links to the secure portal.',
        icon: 'envelope',
      },
      {
        id: 'candidate',
        label: 'Candidate',
        tooltipTitle: 'Secure Portal Access',
        description: 'The candidate accesses the mobile-friendly, secure portal to complete their screening form.',
        icon: 'user',
      },
      {
        id: 'fills-forms',
        label: 'Fills Forms',
        tooltipTitle: 'Consent & History',
        description: 'The candidate inputs their personal history details and provides formal consent for verification.',
        icon: 'edit',
      },
      {
        id: 'uploads-docs',
        label: 'Uploads Docs',
        tooltipTitle: 'Document Upload',
        description: 'The candidate securely uploads digital copies of their passport, credentials, and employment proof.',
        icon: 'paperclip',
      },
    ],
  },
  {
    name: 'REVIEW & VERIFICATION',
    colorClass: styles.phaseReview,
    steps: [
      {
        id: 'hr-reviews',
        label: 'HR Reviews',
        tooltipTitle: 'Real-time Tracker',
        description: 'HR tracks candidate progress and initial document completion states on their control dashboard.',
        icon: 'eye',
      },
      {
        id: 'approved',
        label: 'Approved',
        tooltipTitle: 'Trigger Check',
        description: 'HR approves the completeness of the candidate\'s form, initiating the specialized screening checks.',
        icon: 'check-circle',
      },
      {
        id: 'ai-document-scan',
        label: 'AI Document Scan',
        tooltipTitle: 'Forensic OCR & Fraud Check',
        description: 'AI instantly scans uploaded documents (IDs, degrees, pay slips) to check for metadata alterations, edits, or optical forgery.',
        icon: 'ai-cpu',
        colorClass: styles.phaseAI, // Highlighted with AI purple theme
      },
      {
        id: 'admin',
        label: 'Admin',
        tooltipTitle: 'Compliance Verification',
        description: 'OzClu compliance officers verify compliance standards and document authenticity internally.',
        icon: 'shield',
      },
      {
        id: 'verifier',
        label: 'Verifier',
        tooltipTitle: 'Source Verification',
        description: 'Our verification experts contact primary sources, databases, and authorities to cross-check records.',
        icon: 'search',
      },
      {
        id: 'checks-done',
        label: 'Checks Done',
        tooltipTitle: 'Audited & Locked',
        description: 'All screening processes are finalized, audited, and marked complete in the secure database.',
        icon: 'magnifying-glass',
      },
    ],
  },
  {
    name: 'REPORT & DECISION',
    colorClass: styles.phaseReport,
    steps: [
      {
        id: 'report-ready',
        label: 'Report Ready',
        tooltipTitle: 'Tamper-proof Report',
        description: 'A comprehensive, digitally signed background verification report is automatically generated.',
        icon: 'file-text',
      },
      {
        id: 'ai-risk-scoring',
        label: 'AI Risk Scoring',
        tooltipTitle: 'Smart Profile & Insights',
        description: 'AI synthesizes findings, flags database discrepancies, computes an overall risk rating, and compiles an executive summary.',
        icon: 'ai-sparkles',
        colorClass: styles.phaseAI, // Highlighted with AI purple theme
      },
      {
        id: 'delivered',
        label: 'Delivered',
        tooltipTitle: 'Dashboard Integration',
        description: 'The final PDF report is securely dispatched to the HR portal and synced directly with their ATS.',
        icon: 'mailbox',
      },
      {
        id: 'company-hr-recv',
        label: 'Company HR',
        tooltipTitle: 'Outcome Review',
        description: 'HR receives a secure alert to access and review the candidate\'s verified credentials and clear findings.',
        icon: 'building',
      },
      {
        id: 'hire-decision',
        label: 'Hire Decision',
        tooltipTitle: 'Confident Onboarding',
        description: 'The company confidently proceeds with onboarding the candidate, backed by verified screening data.',
        icon: 'target',
      },
    ],
  },
];

const icons: Record<string, React.ReactNode> = {
  'building': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="16" />
      <line x1="15" y1="22" x2="15" y2="16" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01" />
    </svg>
  ),
  'clipboard': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
  'envelope': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  'user': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  'edit': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  'paperclip': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  ),
  'eye': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'check-circle': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  'shield': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'search': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  'magnifying-glass': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <path d="M8 11l2 2 4-4" />
    </svg>
  ),
  'file-text': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  'mailbox': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
      <path d="M2 8l10 6 10-6" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </svg>
  ),
  'target': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  'ai-cpu': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4 9h4M16 15h4M5.5 5.5l3 3M15.5 15.5l3 3M5.5 18.5l3-3M15.5 8.5l3-3" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  'ai-sparkles': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      <path d="M19 3l0.75 1.5L21.25 5.25L19.5 6l-.5 1.5-.75-1.5L16.5 5.25l1.75-.75L19 3z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const Arrow = () => (
  <div className={styles.arrow}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </div>
);

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`} aria-label="How It Works">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)', display: 'block' }}>
              Fully Automated. Fully Optimised.
            </span>
            <h2 className="headline-md">The Next Generation of Background Verification</h2>
            <p className="body-md">
              We are building toward a future of deeper automation, smarter integrations, and even greater transparency — powered by technology, designed for absolute clarity.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.processContainer}>
          <div className={styles.swipeHint}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span>Hover on any step to see its purpose • Scroll to see full process</span>
          </div>

          {phases.map((phase, phaseIdx) => (
            <div key={phase.name} className={styles.phaseRow}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseTitle}>{phase.name}</span>
                <div className={styles.phaseLine} />
              </div>

              <div className={styles.stepsWrapper}>
                {phase.steps.map((step, stepIdx) => {
                  // Determine the color class (use custom override for AI nodes if available)
                  const stepColorClass = step.colorClass || phase.colorClass;
                  
                  return (
                    <div key={step.id} className={styles.stepItem}>
                      <div className={`${styles.stepNode} ${stepColorClass}`}>
                        {/* Tooltip containing "what is the use of that" */}
                        <div className={styles.tooltip}>
                          <span className={styles.tooltipTitle}>{step.tooltipTitle}</span>
                          <p className={styles.tooltipDesc}>{step.description}</p>
                        </div>

                        <div className={styles.circle}>
                          {icons[step.icon]}
                        </div>
                        <span className={styles.label}>{step.label}</span>
                      </div>

                      {stepIdx < phase.steps.length - 1 && <Arrow />}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
