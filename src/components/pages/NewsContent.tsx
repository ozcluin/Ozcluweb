import NewsSection from "@/components/NewsSection";
import SubscribeForm from "@/components/SubscribeForm";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./NewsContent.module.css";

export default function NewsContent() {
  return (
    <>
      {/* News Hero */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              Insights into the Future of Verification
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className={`body-lg ${styles.heroBody}`}>
              Discover the latest methodologies, industry shifts, and transparent practices defining the modern landscape of intelligence and truth-seeking.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <NewsSection />

      {/* Subscribe Section */}
      <section className={`section ${styles.subscribe}`}>
        <div className="container">
          <ScrollReveal>
            <div className={`glass-panel ${styles.subscribeCard}`}>
              <h2 className={`headline-md ${styles.subscribeTitle}`}>Stay Informed</h2>
              <p className={`body-md ${styles.subscribeBody}`}>
                Subscribe to receive analytical briefings and methodological updates directly to your inbox.
              </p>
              <SubscribeForm />
              <p className={`body-sm ${styles.subscribeNote}`}>
                We adhere to strict privacy protocols. No spam.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
