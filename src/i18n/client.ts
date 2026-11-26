"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, makeL } from "./core";

// Client components take the language from the address: pages under /zh are Chinese.
export function useLocale() {
  return localeFromPath(usePathname());
}

export function useL() {
  return makeL(useLocale());
}
