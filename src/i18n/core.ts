// Two languages share one codebase. Every piece of wording is written as L("English", "中文"); a page
// picks the language and L returns the matching text. English lives at the site root, Chinese under /zh.
export type Locale = "en" | "zh";
export type L = <T>(en: T, zh: T) => T;

export const makeL =
  (locale: Locale): L =>
  (en, zh) =>
    locale === "zh" ? zh : en;

export const localeFromPath = (pathname: string | null | undefined): Locale =>
  pathname === "/zh" || pathname?.startsWith("/zh/") ? "zh" : "en";

// The same page in the given language: "/about/#x" ⇄ "/zh/about/#x". Leaves external links, mailto:, tel:,
// hash-only links and files (anything with an extension, e.g. /files/x.pdf) alone.
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const [path, rest = ""] = href.split(/(?=[?#])/, 2) as [string, string?];
  if (/\.[a-z0-9]+$/i.test(path)) return href;
  const bare = path === "/zh" ? "/" : path.startsWith("/zh/") ? path.slice(3) : path;
  return (locale === "zh" ? (bare === "/" ? "/zh/" : `/zh${bare}`) : bare) + rest;
}
