import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").legacyLocation;

export default function LocationPage() {
  return <LocationView />;
}
