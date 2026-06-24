import type { Metadata } from "next";
import PrivacyContent from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — OZCLU Verification Services",
  description:
    "Learn about OzClu's privacy practices, data protection protocols, and candidate information security guidelines.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
