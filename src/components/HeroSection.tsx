'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState('/images/hero-bg.png');
  const [tagline, setTagline] = useState('Trust Starts with Visibility.');

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          if (data.heroBackgroundImage) setHeroImage(data.heroBackgroundImage);
          if (data.tagline) setTagline(data.tagline);
        }
      } catch (err) {
        console.error('Failed to load hero settings dynamically:', err);
      }
    }
    fetchSettings();
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      {/* Background layers */}
      <div className={styles.bgLayer}>
        <Image
          src={heroImage}
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
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <ScrollReveal>
              <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'block' }}>
                Transparency You Can Verify
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className={`display-lg ${styles.headline}`}>
                {tagline.toLowerCase().includes('trust starts with') ? (
                  <>
                    Trust Starts with{' '}
                    <span className={styles.headlineAccent}>Visibility.</span>
                  </>
                ) : (
                  tagline
                )}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className={`body-lg ${styles.subheading}`}>
                Trust and accuracy are our top priorities. We are committed to delivering 
                exceptional customer service and ensuring compliance with all relevant 
                regulations through technology-driven verification.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className={styles.ctas}>
                <Link href="/services" className="btn btn-primary btn-lg" id="hero-cta-primary">
                  Get Started
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
                  Book a Consultation
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400} className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlass}>
                <Image
                  src={heroImage}
                  alt="Abstract glass panels representing transparency in verification"
                  width={560}
                  height={420}
                  priority
                  quality={85}
                  className={styles.heroImage}
                />
              </div>
              {/* Floating glass accent */}
              <div className={styles.floatingCard}>
                <div className={styles.floatingCardInner}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z" fill="#5CB85C" />
                  </svg>
                  <span className="body-sm" style={{ color: 'var(--on-surface)', fontWeight: 500 }}>
                    Verification Complete
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
