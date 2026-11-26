import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").legacyLocation;

export default function ZhLocationPage() {
  return <LocationView />;
}
