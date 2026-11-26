import type { Metadata } from "next";
import PrivacyView from "@/views/PrivacyView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").privacy;

export default function PrivacyPage() {
  return <PrivacyView />;
}
