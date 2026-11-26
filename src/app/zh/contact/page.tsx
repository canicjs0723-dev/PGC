import type { Metadata } from "next";
import ContactView from "@/views/ContactView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("zh").contact;

export default function ZhContactPage() {
  return <ContactView />;
}
