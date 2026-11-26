"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { localizeHref, type Locale } from "@/i18n/core";
import { useLocale } from "@/i18n/client";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  /** Language of the target page. Defaults to the current page's language, so links stay in Chinese under /zh. */
  locale?: Locale;
};

export function staticHref(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const destination = new URL(href, "https://pgc-renewal.invalid");
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");
  const pathname = destination.pathname === "/" ? "/" : `${destination.pathname.replace(/\/+$/, "")}/`;
  return `${basePath}${pathname}${destination.search}${destination.hash}`;
}

export default function SiteLink({ href, locale, ...props }: SiteLinkProps) {
  const current = useLocale();
  const target = localizeHref(href, locale ?? current);
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "1") {
    return <a href={staticHref(target)} {...props} />;
  }

  return <Link href={target} {...props} />;
}
