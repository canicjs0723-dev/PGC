import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").informationLocation;

export default function InformationLocationPage() {
  return <LocationView />;
}
