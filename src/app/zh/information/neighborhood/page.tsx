import type { Metadata } from "next";
import NeighborhoodView from "@/components/NeighborhoodView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").neighborhood;

export default function ZhInformationNeighborhoodPage() {
  return <NeighborhoodView />;
}
