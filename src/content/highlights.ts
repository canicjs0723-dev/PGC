import type { L } from "@/i18n/core";



export function highlightsContent(L: L) {
  // Edit the home highlight slide text and image paths here.
  // Keep image files in public/images and preserve their names to avoid broken references.
  const homeHighlights = [
    {
      image: "/images/building-205-street.jpg",
      alt: L("Building 205 at Pangyo Global Campus", "板桥环球园区205栋"),
      label: L("The Campus", "园区"),
      title: L("Building 205", "205栋"),
      headline: L("Nature and terrace living, in Daejang-dong.", "在大庄洞，享受自然与露台生活。"),
      description: L("An upscale terrace residence within TH212 Pangyo, surrounded by greenery and seasonal gardens, just minutes from Pangyo's business district.", "位于板桥TH212内的高端露台住宅，绿意环绕、四季花园相伴，距板桥商务区仅数分钟。"),
      href: "/about",
      linkLabel: L("View More", "查看更多"),
    },
    {
      image: "/images/403-hero.png",
      alt: L("Business Room lounge", "商务套房休息区"),
      label: L("Business Room", "商务套房"),
      title: L("Business Room", "商务套房"),
      headline: L("Designed for meetings, work and networking.", "专为会议、工作与交流而设计。"),
      description: L("A refined setting for business meetings, private gatherings, and meaningful connections, bringing work and relaxation together.", "适合商务会议、私人聚会与深度交流的雅致空间，让工作与休憩相得益彰。"),
      facts: L("5 guests · 5 beds · 2 bathrooms", "可住5人 · 5张床 · 2间卫生间"),
      href: "/business-room",
      linkLabel: L("View More", "查看更多"),
    },
    {
      image: "/images/404-hero.png",
      alt: L("Guest Room lounge", "宾客套房休息区"),
      label: L("Guest Room", "宾客套房"),
      title: L("Guest Room", "宾客套房"),
      headline: L("Designed for comfort, rest and privacy.", "专为舒适、休憩与私密而设计。"),
      description: L("A welcoming residence for visiting executives, employees, and guests, with room to relax and recharge between plans.", "为来访的高管、员工和宾客准备的温馨居所，行程间隙可在此放松身心、恢复活力。"),
      facts: L("9 guests · 9 beds · 2 bathrooms", "可住9人 · 9张床 · 2间卫生间"),
      href: "/guest-room",
      linkLabel: L("View More", "查看更多"),
    },
  ];

  return { homeHighlights };
}
