import type { Metadata } from "next";
import FaqContent from "@/components/pages/FaqContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — OZCLU Verification Services",
  description:
    "Have questions? Browse our FAQ to learn more about verification timelines, candidate onboarding, and compliance rules.",
};

export default function FaqPage() {
  return <FaqContent />;
}
