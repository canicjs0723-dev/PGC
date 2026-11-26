import type { Metadata } from "next";
import LocationView from "@/components/LocationView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").information;

export default function ZhInformationPage() {
  return <LocationView />;
}
