import type { Metadata } from "next";
import GuideView from "@/components/GuideView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").guide;

export default function ZhGuidePage() {
  return <GuideView />;
}
