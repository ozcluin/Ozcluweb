import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact — OZCLU Verification Services",
  description:
    "Get in touch with OzClu for transparent background verification services. Inquire about employment checks, compliance screening, and custom verification workflows.",
};

export default function ContactPage() {
  return <ContactContent />;
}
