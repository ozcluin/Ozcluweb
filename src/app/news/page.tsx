import type { Metadata } from "next";
import NewsContent from "@/components/pages/NewsContent";

export const metadata: Metadata = {
  title: "News — OZCLU Verification Services",
  description:
    "Discover the latest insights, industry analysis, and thought leadership on background verification, compliance, and transparent hiring practices.",
};

export default function NewsPage() {
  return <NewsContent />;
}
