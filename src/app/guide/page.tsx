import type { Metadata } from "next";
import GuideView from "@/components/GuideView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").guide;

export default function GuidePage() {
  return <GuideView />;
}
