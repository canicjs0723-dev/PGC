import type { Metadata } from "next";
import PrivacyView from "@/views/PrivacyView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").privacy;

export default function ZhPrivacyPage() {
  return <PrivacyView />;
}
