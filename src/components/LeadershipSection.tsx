'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './LeadershipSection.module.css';

const fallbackLeaders = [
  {
    name: 'Arjun Mehta',
    role: 'CEO & Founder',
    image: '/images/ceo.png',
    bio: 'With over two decades of experience in risk management and corporate governance, Arjun founded OzClu to bring radical transparency to an industry historically defined by opacity. His vision is a world where verification builds trust, not barriers.',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO & Partner',
    image: '/images/cto.png',
    bio: 'Priya leads OzClu\'s technology strategy with deep expertise in secure systems architecture, data engineering, and automation. She is responsible for building the platform infrastructure that makes transparent verification scalable.',
  },
  {
    name: 'Ravi Kapoor',
    role: 'CFO & Partner',
    image: '/images/cfo.png',
    bio: 'Ravi brings financial discipline and operational rigour to OzClu. With a background in corporate finance and regulatory compliance, he ensures the business itself operates with the same transparency it promises its clients.',
  },
];

export default function LeadershipSection() {
  const [displayedLeaders, setDisplayedLeaders] = useState(fallbackLeaders);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch('/api/team');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const mapped = data.map((m: any) => ({
              name: m.name,
              role: m.role,
              image: m.image || '/images/ceo.png',
              bio: m.bio || 'Professional verification operations director at OzClu.',
            }));
            setDisplayedLeaders(mapped);
          }
        }
      } catch (err) {
        console.error('Failed to load team members dynamically:', err);
      }
    }
    fetchTeam();
  }, []);

  const leadLeader = displayedLeaders[0] || fallbackLeaders[0];
  const otherLeaders = displayedLeaders.slice(1);

  return (
    <section id="leadership" className={`section ${styles.section}`} aria-label="Our Directors">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)', display: 'block' }}>
              Our Directors
            </span>
            <h2 className={`headline-lg ${styles.title}`}>The People Behind the Promise</h2>
            <p className="body-md text-muted" style={{ maxWidth: '560px' }}>
              We don&apos;t hide behind a faceless corporate layer. The people leading OzClu are accessible, accountable, and personally invested in delivering on our transparency promise.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Lead director — large card */}
          <ScrollReveal delay={100} className={styles.leadCard}>
            <div className={`glass-panel ${styles.card} ${styles.cardLead}`}>
              <div className={styles.cardImageLead}>
                <Image
                  src={leadLeader.image}
                  alt={`Portrait of ${leadLeader.name}, ${leadLeader.role}`}
                  fill
                  quality={85}
                  className={styles.portrait}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className="chip chip-primary">{leadLeader.role}</span>
                <h3 className={`headline-md ${styles.cardName}`}>{leadLeader.name}</h3>
                <p className={`body-sm ${styles.cardBio}`}>{leadLeader.bio}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Secondary directors */}
          {otherLeaders.length > 0 && (
            <div className={styles.secondaryCards}>
              {otherLeaders.map((leader, i) => (
                <ScrollReveal key={leader.name} delay={200 + (i * 150)}>
                  <div className={`glass-panel glass-card-hover ${styles.card} ${styles.cardSecondary}`}>
                    <div className={styles.cardImageSecondary}>
                      <Image
                        src={leader.image}
                        alt={`Portrait of ${leader.name}, ${leader.role}`}
                        width={100}
                        height={100}
                        quality={85}
                        className={styles.portraitSmall}
                      />
                    </div>
                    <div className={styles.cardContentSecondary}>
                      <span className="chip chip-primary" style={{ fontSize: '0.6875rem' }}>{leader.role}</span>
                      <h3 className={`headline-sm ${styles.cardName}`}>{leader.name}</h3>
                      <p className={`body-sm ${styles.cardBio}`}>{leader.bio}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
