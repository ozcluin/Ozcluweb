import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';
import styles from './PrivacyContent.module.css';

export default function PrivacyContent() {
  return (
    <>
      <section className={styles.hero}>
        {/* Background layers */}
        <div className={styles.bgLayer}>
          <Image
            src="/images/faq-bg.png"
            alt=""
            fill
            priority
            quality={90}
            className={styles.bgImage}
            sizes="100vw"
          />
          <div className={styles.bgOverlay} />
          <div className={styles.bgGradient} />
        </div>

        <div className={`container ${styles.content}`}>
          <ScrollReveal>
            <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)', display: 'block' }}>
              Legal & Compliance
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className={`display-md ${styles.heroTitle}`}>Privacy Policy</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={`body-md ${styles.heroBody}`}>
              How OzClu handles, secures, and respects your personal information during the verification process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <ScrollReveal delay={300} className={styles.richText}>
            <h2>1. Information We Collect</h2>
            <p>
              In providing background verification services, OzClu collects information necessary to confirm identity, employment, education, and regulatory standing. This may include:
            </p>
            <ul>
              <li>Contact details (name, email address, phone number).</li>
              <li>Official government identification documents (passports, driver's licenses, national ID cards).</li>
              <li>Employment history details (previous employers, roles, salaries, references).</li>
              <li>Academic credentials (degrees, diplomas, transcripts).</li>
              <li>Public records (regulatory lists, sanction lists, watchlists).</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>
              We process personal information solely for the purpose of completing background screening tasks authorized by you or our enterprise clients. Specifically, we use it to:
            </p>
            <ul>
              <li>Verify identity and authenticate documents.</li>
              <li>Confirm employment and education history.</li>
              <li>Provide secure verification status updates on our dashboard.</li>
              <li>Deliver final, compiled reports to authorized hiring organizations.</li>
              <li>Ensure compliance with legal and regulatory mandates.</li>
            </ul>

            <h2>3. Consent and Data Authorization</h2>
            <p>
              All background checks run by OzClu are initiated only after receiving explicit, documented consent from the individual undergoing the check. You retain the right to withdraw consent at any time, which will immediately cease all active verification requests.
            </p>

            <h2>4. Security and Storage</h2>
            <p>
              We take information security extremely seriously. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Access to verification files is strictly controlled through role-based access protocols and restricted to authorized compliance officers and verifiers.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to complete the verification checks and comply with our legal obligations. Once the retention period expires, files are permanently purged from our servers using secure data sanitization methods.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Under applicable privacy regulations, you have rights regarding your personal information, including the right to request access to your verification files, request corrections to any inaccuracies, or request deletion of your records.
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
