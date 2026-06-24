import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services — OZCLU Verification Services",
  description:
    "Explore OzClu's comprehensive verification services: employment background checks, identity verification, business due diligence, compliance screening, and more.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
