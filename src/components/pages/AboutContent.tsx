import Image from 'next/image';
import WhyOzClu from "@/components/WhyOzClu";
import AboutFeatures from "@/components/AboutFeatures";
import PeopleFirst from "@/components/PeopleFirst";
import ComplianceSection from "@/components/ComplianceSection";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./AboutContent.module.css";

export default function AboutContent() {
  return (
    <>
      {/* About Hero */}
      <section className={styles.hero}>
        {/* Background layers */}
        <div className={styles.bgLayer}>
          <Image
            src="/images/about-bg.png"
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
            <span className="label-md" style={{ color: "var(--primary)", marginBottom: "var(--space-4)", display: "block" }}>
              About OzClu
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              Built on Transparency.<br />
              Driven by Trust.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={`body-lg ${styles.heroBody}`}>
              OzClu was founded on a simple conviction: organisations deserve full clarity into how their most critical decisions are informed. We bring transparency to every verification, every check, every step.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WhyOzClu />
      <AboutFeatures />
      <PeopleFirst />
      <ComplianceSection />
    </>
  );
}


