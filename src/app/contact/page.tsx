import type { Metadata } from "next";
import ContactView from "@/views/ContactView";
import { pageMeta } from "@/views/meta";

export const metadata: Metadata = pageMeta("en").contact;

export default function ContactPage() {
  return <ContactView />;
}
