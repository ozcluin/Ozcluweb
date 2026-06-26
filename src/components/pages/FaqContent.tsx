'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';
import styles from './FaqContent.module.css';

const faqs = [
  {
    question: 'How long do standard background verification checks take?',
    answer: 'Standard employment background and identity checks are usually completed within 3 to 5 business days. Complex international verifications or detailed business due diligence screenings may take up to 7 to 10 business days depending on responsiveness of primary sources.',
  },
  {
    question: 'What information does a candidate need to provide?',
    answer: 'Candidates typically need to provide government ID (such as a passport or driver\'s license), previous employment history records (company name, dates, supervisor contacts), and academic certificates. All information is uploaded securely through our encrypted portal.',
  },
  {
    question: 'How does OzClu ensure data security and privacy compliance?',
    answer: 'We secure all data in transit using TLS 1.3 and at rest with AES-256 encryption. We comply fully with relevant data protection laws, restrict access internally via role-based access, and require candidate authorization prior to executing any checks.',
  },
  {
    question: 'Can candidates dispute background check findings?',
    answer: 'Yes. In alignment with transparent governance practices, candidates are immediately notified of findings and can dispute any inaccuracies directly. OzClu will re-verify the records against the primary source and update the report if discrepancies are confirmed.',
  },
  {
    question: 'Does OzClu support international verifications?',
    answer: 'Yes, we have a global verification network covering multiple jurisdictions, allowing us to perform employment history checks, academic credentials verifications, and global database screenings internationally with local compliance awareness.',
  },
  {
    question: 'How does the automated dashboard work for HR teams?',
    answer: 'HR teams get access to a secure, real-time tracking control panel where they can trigger checks, view progress bars of active candidate reviews, download compiled PDF reports, and audit previous verification logs instantly.',
  },
];

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Support Center
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className={`display-md ${styles.heroTitle}`}>Frequently Asked Questions</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={`body-md ${styles.heroBody}`}>
              Find answers to the most common questions regarding verification workflows, timelines, and security guidelines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <ScrollReveal delay={300}>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                  >
                    <button
                      className={styles.questionButton}
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      <span className={`${styles.iconWrapper} ${isOpen ? styles.iconRotated : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    <div className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ''}`}>
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
