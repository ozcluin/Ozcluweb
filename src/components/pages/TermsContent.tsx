import ScrollReveal from '../ScrollReveal';
import styles from './TermsContent.module.css';

export default function TermsContent() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)', display: 'block' }}>
              Legal & Compliance
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className={`display-md ${styles.heroTitle}`}>Terms of Service</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={`body-md ${styles.heroBody}`}>
              Governing rules, agreements, and expectations when utilizing OzClu's verification services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <ScrollReveal delay={300} className={styles.richText}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing the OzClu background verification platform, you agree to comply with and be bound by these Terms of Service. If you are accessing the services on behalf of an organization, you certify that you have the authority to bind that organization to these terms.
            </p>

            <h2>2. Authorized Use and Account Security</h2>
            <p>
              To access our verification services, you must register for a secure account. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate, complete registration and profile information.</li>
              <li>Maintaining the confidentiality of your credentials and credentials delegated to your staff.</li>
              <li>All activities occurring under your account, reporting any security leaks or unauthorized access immediately.</li>
            </ul>

            <h2>3. Screening Compliance and Candidate Consent</h2>
            <p>
              Organizations requesting background screening are solely responsible for ensuring that all requested verifications comply with local labor, privacy, and civil rights regulations. You represent and warrant that:
            </p>
            <ul>
              <li>Explicit, legally binding authorization has been obtained from the candidate before initiating a screening order.</li>
              <li>Candidates are notified of their rights regarding disclosure, dispute resolution, and adverse-action protocols.</li>
              <li>No verifications are initiated for discriminatory or illegal purposes.</li>
            </ul>

            <h2>4. Service Delivery and Accuracy</h2>
            <p>
              OzClu relies on primary source verification, public databases, and candidate declarations. While we enforce strict verification standards and quality control checks, we do not warrant that all database information retrieved from third parties is entirely free from external error. We commit to correcting any reported discrepancies promptly.
            </p>

            <h2>5. Prohibited Practices</h2>
            <p>
              When using the platform, you agree not to:
            </p>
            <ul>
              <li>Reverse engineer, scrape, or extract data from the platform.</li>
              <li>Circumvent security protocols or gain unauthorized access to candidates' files.</li>
              <li>Resell, distribute, or license screening reports without explicit written consent from OzClu.</li>
            </ul>

            <h2>6. Liability Limits</h2>
            <p>
              In no event shall OzClu be liable for any indirect, special, incidental, or consequential damages resulting from the use of, or inability to use, our verification platform or information contained in reports, except as provided under applicable law.
            </p>

            <span className={styles.lastUpdated}>
              Last updated: June 20, 2026
            </span>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
