import type { Metadata } from "next";
import NeighborhoodView from "@/components/NeighborhoodView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").neighborhood;

export default function InformationNeighborhoodPage() {
  return <NeighborhoodView />;
}
