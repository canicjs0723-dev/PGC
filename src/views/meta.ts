import type { Metadata } from "next";
import { roomsContent } from "@/content/rooms";
import { siteContent } from "@/content/site";
import { makeL, type Locale } from "@/i18n/core";

// Page titles, descriptions and link previews in both languages. English pages live at the site root and
// Chinese pages under /zh; each page file picks its entry with pageMeta("en" | "zh").

// Public site address, used for absolute link-preview URLs (messengers need the full https:// address).
const repository = process.env.GITHUB_REPOSITORY?.split("/");
const siteUrl = repository ? `https://${repository[0]}.github.io${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}` : "http://localhost:3000";

export function rootMeta(locale: Locale): Metadata {
  const L = makeL(locale);
  const description = L(
    "A premium business residence in Daejang-dong, Pangyo, where work, rest and meaningful connections come together. Business Room and Guest Room.",
    "位于板桥大庄洞的高端商务住宅，将工作、休憩与有意义的交流融为一体。提供商务套房与宾客套房。",
  );
  const title = L("Pangyo Global Campus", "板桥环球园区 Pangyo Global Campus");
  const home = `${siteUrl}${L("/", "/zh/")}`;
  return {
    title: { default: title, template: L("%s | Pangyo Global Campus", "%s | 板桥环球园区") },
    description,
    // Link preview shown when the site address is shared in a messenger or social app.
    openGraph: {
      type: "website",
      locale: L("en_US", "zh_CN"),
      url: home,
      siteName: L("Pangyo Global Campus", "板桥环球园区"),
      title,
      description,
      images: [{ url: `${siteUrl}/images/og-pgc-2026.jpg`, width: 1200, height: 630, alt: L("Building 205 at Pangyo Global Campus", "板桥环球园区205栋") }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/images/og-pgc-2026.jpg`] },
    // Tell search engines the two language versions of the site belong together.
    alternates: { languages: { en: `${siteUrl}/`, "zh-CN": `${siteUrl}/zh/` } },
  };
}

export function pageMeta(locale: Locale) {
  const L = makeL(locale);
  const { site, intro } = siteContent(L);
  const { businessRoom, guestRoom } = roomsContent(L);
  const prefix = L("", "/zh");
  const location: Metadata = {
    title: L("Information · Location", "周边信息 · 位置"),
    alternates: { canonical: `${prefix}/information/location/` },
  };
  return {
    about: { title: L("About", "关于我们"), description: intro.body[0] },
    businessRoom: { title: L("Business Room", "商务套房"), description: businessRoom.description[0] },
    guestRoom: { title: L("Guest Room", "宾客套房"), description: guestRoom.description[0] },
    guide: {
      title: L("Guide", "入住指南"),
      description: L(
        "Arrival, check-in, guest guidelines and FAQ for your stay at Pangyo Global Campus.",
        "板桥环球园区入住须知：抵达、办理入住、住客守则及常见问题。",
      ),
    },
    // /information and /location are older addresses that now show the Location page.
    information: location,
    legacyLocation: location,
    informationLocation: {
      title: L("Information · Location", "周边信息 · 位置"),
      description: L(
        `${site.address.rooms}, ${site.address.street}. Directions and parking registration for Pangyo Global Campus.`,
        `${site.address.rooms}，${site.address.street}。板桥环球园区交通指引与停车登记。`,
      ),
    },
    neighborhood: {
      title: L("Information · Neighborhood", "周边信息 · 周边"),
      description: L(
        "Local dining, places to visit and everyday essentials near Pangyo Global Campus (TH212, Building 205).",
        "板桥环球园区（TH212，205栋）周边的餐饮、景点及生活便利设施。",
      ),
    },
    contact: {
      title: L("Contact", "联系我们"),
      description: L(
        "Inquiries for business stays, guest arrangements and visits to Pangyo Global Campus.",
        "板桥环球园区商务住宿、宾客安排及参观咨询。",
      ),
    },
    privacy: { title: L("Privacy Notice", "隐私声明"), robots: { index: false } },
  } satisfies Record<string, Metadata>;
}
