import ServicesSection from "@/components/ServicesSection";
import PlatformFeatures from "@/components/PlatformFeatures";
import HowItWorks from "@/components/HowItWorks";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ServicesContent.module.css";

export default function ServicesContent() {
  return (
    <>
      {/* Services Hero */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <span className="label-md" style={{ color: "var(--primary)", marginBottom: "var(--space-4)", display: "block" }}>
              Our Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              Verification Services Built for Clarity
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={`body-lg ${styles.heroBody}`}>
              Every service is designed to deliver actionable, transparent results — giving your organisation the confidence to move forward with verified intelligence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServicesSection />
      <PlatformFeatures />
      <HowItWorks />
    </>
  );
}
