import type { Metadata } from "next";
import TermsContent from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — OZCLU Verification Services",
  description:
    "Review the Terms of Service governing the use of OzClu's platform and background verification products.",
};

export default function TermsPage() {
  return <TermsContent />;
}
