import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About — OZCLU Verification Services",
  description:
    "Learn about OzClu's transparency-first philosophy, our people-first approach to verification, and our commitment to compliance and data responsibility.",
};

export default function AboutPage() {
  return <AboutContent />;
}
