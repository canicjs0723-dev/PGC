import type { Metadata } from "next";
import AboutView from "@/views/AboutView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").about;

export default function AboutPage() {
  return <AboutView />;
}
