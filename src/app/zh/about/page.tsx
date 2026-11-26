import type { Metadata } from "next";
import AboutView from "@/views/AboutView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").about;

export default function ZhAboutPage() {
  return <AboutView />;
}
