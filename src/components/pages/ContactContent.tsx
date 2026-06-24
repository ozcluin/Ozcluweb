import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ContactContent.module.css";

export default function ContactContent() {
  return (
    <>
      {/* Contact Hero */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal>
            <span className="label-md" style={{ color: "var(--gold)", marginBottom: "var(--space-4)", display: "block" }}>
              Get in Touch
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className={`display-lg ${styles.heroTitle}`}>
              Transparency Starts with a Conversation
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={`body-lg ${styles.heroBody}`}>
              Have questions about our verification services? Ready to explore a partnership? We respond to all inquiries within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
