'use client';

import { useState, type FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const text = formData.get('message') as string;

    const fullMessage = `Service: ${service || 'General Inquiry'}\n\n${text}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, message: fullMessage }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('A network error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={`glass-panel-elevated ${styles.successCard}`}>
            <div className={styles.successIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className={`headline-md ${styles.successTitle}`}>Thank You</h2>
            <p className="body-md text-muted">
              Your inquiry has been received. Our team will respond within one business day.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Contact info */}
          <div className={styles.info}>
            <ScrollReveal>
              <h2 className={`headline-md ${styles.infoTitle}`}>
                Let&apos;s Start a Conversation
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className={`body-md ${styles.infoBody}`}>
                Whether you&apos;re exploring verification for the first time or looking for a more transparent partner, we&apos;re here to help.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoItemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="label-sm" style={{ color: 'var(--secondary)', marginBottom: '0.25rem', display: 'block' }}>Email</span>
                    <a href="mailto:indiaops@ozclu.com" className={styles.infoLink}>indiaops@ozclu.com</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoItemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <span className="label-sm" style={{ color: 'var(--secondary)', marginBottom: '0.25rem', display: 'block' }}>Response Time</span>
                    <span className="body-sm" style={{ color: 'var(--on-surface)', fontWeight: 500 }}>Within 1 business day</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoItemIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <span className="label-sm" style={{ color: 'var(--secondary)', marginBottom: '0.25rem', display: 'block' }}>Privacy</span>
                    <span className="body-sm" style={{ color: 'var(--on-surface)', fontWeight: 500 }}>All inquiries are treated confidentially</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={150}>
            <form className={`glass-panel-elevated ${styles.form}`} onSubmit={handleSubmit} id="contact-form">
              {error && (
                <div style={{ color: 'red', marginBottom: 'var(--space-4)', fontSize: '0.875rem' }}>
                  {error}
                </div>
              )}
              
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={`label-sm ${styles.label}`}>Full Name</label>
                  <input type="text" id="contact-name" name="name" className={styles.input} required placeholder="Your full name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-company" className={`label-sm ${styles.label}`}>Organisation</label>
                  <input type="text" id="contact-company" name="company" className={styles.input} required placeholder="Company or organisation" />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={`label-sm ${styles.label}`}>Email</label>
                  <input type="email" id="contact-email" name="email" className={styles.input} required placeholder="your.email@company.com" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-phone" className={`label-sm ${styles.label}`}>Phone <span style={{ opacity: 0.5 }}>(Optional)</span></label>
                  <input type="tel" id="contact-phone" name="phone" className={styles.input} placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-service" className={`label-sm ${styles.label}`}>Service of Interest</label>
                <select id="contact-service" name="service" className={styles.select} required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="employment">Employment Background Checks</option>
                  <option value="identity">Identity Verification</option>
                  <option value="due-diligence">Business Due Diligence</option>
                  <option value="compliance">Compliance Screening</option>
                  <option value="monitoring">Continuous Monitoring</option>
                  <option value="custom">Custom Verification Workflows</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={`label-sm ${styles.label}`}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={styles.textarea}
                  rows={5}
                  required
                  placeholder="Briefly describe your verification needs or questions..."
                />
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary btn-lg ${styles.submitBtn}`} 
                id="contact-submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
