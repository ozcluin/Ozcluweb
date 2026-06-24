import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './LeadershipSection.module.css';

const leaders = [
  {
    name: 'Arjun Mehta',
    role: 'CEO & Founder',
    image: '/images/ceo.png',
    bio: 'With over two decades of experience in risk management and corporate governance, Arjun founded OzClu to bring radical transparency to an industry historically defined by opacity. His vision is a world where verification builds trust, not barriers.',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO & Partner',
    image: '/images/cto.png',
    bio: 'Priya leads OzClu\'s technology strategy with deep expertise in secure systems architecture, data engineering, and automation. She is responsible for building the platform infrastructure that makes transparent verification scalable.',
    linkedin: '#',
  },
  {
    name: 'Ravi Kapoor',
    role: 'CFO & Partner',
    image: '/images/cfo.png',
    bio: 'Ravi brings financial discipline and operational rigour to OzClu. With a background in corporate finance and regulatory compliance, he ensures the business itself operates with the same transparency it promises its clients.',
    linkedin: '#',
  },
];

export default function LeadershipSection() {
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
                  src={leaders[0].image}
                  alt={`Portrait of ${leaders[0].name}, ${leaders[0].role}`}
                  fill
                  quality={85}
                  className={styles.portrait}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className="chip chip-primary">{leaders[0].role}</span>
                <h3 className={`headline-md ${styles.cardName}`}>{leaders[0].name}</h3>
                <p className={`body-sm ${styles.cardBio}`}>{leaders[0].bio}</p>
                <a href={leaders[0].linkedin} className={styles.socialLink} aria-label={`${leaders[0].name} LinkedIn profile`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Secondary directors */}
          <div className={styles.secondaryCards}>
            {leaders.slice(1).map((leader, i) => (
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
                    <a href={leader.linkedin} className={styles.socialLink} aria-label={`${leader.name} LinkedIn profile`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
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
