import type { L } from "@/i18n/core";

// Room facts: guests / beds / bathrooms / amenities come from the Notion room sheets (403_.jpg, 404_.jpg).
// Facility details are checked against the PGC overview and room guides; use copy emphasizes verified room uses.

export type Room = {
  slug: "business-room" | "guest-room";
  number: "403" | "404";
  name: string;
  tagline: string;
  // Overview column: either a list of uses, or a two-line headline with a supporting line.
  purpose?: string[];
  overview?: { headline: string[]; sub: string };
  description: string[];
  experience: string;
  keywords: { title: string; body: string }[];
  facts: { label: string; value: string }[];
  amenities: string[];
  signature: string[];
  hero: { src: string; alt: string; position?: string };
  // "Inside the Room" gallery, in display order (living first, then spaces). To use a higher-resolution
  // photo, add it under public/images/ and point src here; position adjusts the 4:3 crop (e.g. "50% 60%").
  living: { src: string; alt: string; position?: string };
  spaces: { name: string; src: string; alt: string; position?: string }[];
};

export function roomsContent(L: L) {

  const businessRoom: Room = {
    slug: "business-room",
    number: "403",
    name: L("Business Room", "商务套房"),
    tagline: L("Meet, gather, and stay—with five beds for overnight visits.", "会面、相聚、留宿——设有5张床，可供过夜。"),
    overview: {
      headline: [L("Your Space to", "会面与留宿"), L("Meet & Stay.", "尽在此处。")],
      sub: L("Corporate Workshops · Meetings · Accommodation", "企业研讨会 · 会议 · 住宿"),
    },
    description: [
      L("The Business Room is an event and business space for workshops, private partner meetings, and team offsites. Five beds are available for overnight stays, so it can support both meetings and lodging.", "商务套房是一处活动与商务空间，适合举办研讨会、与合作伙伴私密会谈以及团队外出活动。套房内设有5张床，可供过夜，会议与住宿皆可兼顾。"),
      L("The dining lounge, projector, and audio equipment make it easy to bring focused work, shared meals, and a comfortable stay together.", "餐饮休息区、投影仪和音响设备一应俱全，轻松兼顾专注工作、共同用餐与舒适住宿。"),
    ],
    experience: L("With five beds as well as meeting space, the Business Room brings meetings, meals, and overnight stays together in one private space.", "商务套房既有会议空间，又设有5张床，在同一私密空间内即可完成会议、用餐与过夜。"),
    keywords: [
      { title: L("Corporate Workshop", "企业研讨会"), body: L("A projector, audio equipment, dining lounge, and five beds support small workshops with an overnight stay.", "投影仪、音响设备、餐饮休息区和5张床，满足小型研讨会与过夜住宿的需求。") },
      { title: L("Partner Meeting", "合作伙伴会议"), body: L("A private setting for client and global partner meetings, with presentation equipment close at hand.", "与客户及全球合作伙伴会谈的私密空间，演示设备触手可及。") },
      { title: L("Team Offsite", "团队外出活动"), body: L("Bring focused sessions, meals, networking, and accommodation together in one space.", "在同一空间内完成专注研讨、用餐、交流与住宿。") },
    ],
    facts: [
      { label: L("Guests", "可住人数"), value: "5" },
      { label: L("Beds", "床位"), value: "5" },
      { label: L("Bathrooms", "卫生间"), value: "2" },
    ],
    amenities: [
      L("TV", "电视"),
      L("Projector", "投影仪"),
      L("Audio Equipment", "音响设备"),
      L("Wine Cooler", "红酒柜"),
      L("Clothing Care System", "衣物护理机"),
      L("Washing Machine", "洗衣机"),
      L("Climate Control", "冷暖空调"),
      L("Robot Vacuum Cleaner", "扫地机器人"),
      L("Dishwasher", "洗碗机"),
      L("Induction Cooktop", "电磁炉"),
      L("Multi Cooker", "多功能电饭煲"),
      L("Air Purifier", "空气净化器"),
      L("Hair Dryer", "吹风机"),
    ],
    signature: [L("Projector", "投影仪"), L("Audio Equipment", "音响设备"), L("Wine Cooler", "红酒柜")],
    hero: { src: "/images/403-hero.png", alt: L("Business Room living lounge with chandelier and open kitchen", "商务套房客厅休息区，配有枝形吊灯和开放式厨房"), position: "50% 55%" },
    living: { src: "/images/403-living.png", alt: L("Business Room lounge sofa facing the terrace windows", "商务套房休息区沙发，面向露台落地窗") },
    spaces: [
      { name: L("Dining Lounge", "餐饮休息区"), src: "/images/403-dining-lounge.png", alt: L("Business Room kitchen island dining lounge", "商务套房厨房岛台餐饮休息区") },
      { name: L("Pamplona", "潘普洛纳"), src: "/images/403-pamplona.png", alt: L("Pamplona bedroom in the Business Room", "商务套房潘普洛纳卧室") },
      { name: L("Attic", "阁楼"), src: "/images/403-attic-study.png", alt: L("Business Room attic with low desks", "商务套房阁楼，配有矮桌") },
      { name: L("Attic", "阁楼"), src: "/images/403-attic-rest.png", alt: L("Business Room attic rest area with two beds", "商务套房阁楼休息区，配有两张床") },
    ],
  };

  const guestRoom: Room = {
    slug: "guest-room",
    number: "404",
    name: L("Guest Room", "宾客套房"),
    tagline: L("Comfort for your stay. Privacy for your rest.", "住得舒适，歇得私密。"),
    purpose: [L("A Place to Stay", "安心入住之所"), L("A Space to Unwind", "放松身心之地")],
    description: [
      L("The Guest Room is designed for visiting executives, employees, and guests, with nine beds, two bathrooms, and capacity for nine guests.", "宾客套房专为来访的高管、员工和宾客设计，设有9张床和2间卫生间，可供9人入住。"),
      L("Created for both short- and long-term visits, the space offers a comfortable place to rest and recharge between schedules.", "无论短期还是长期来访，这里都能让您在行程间隙舒适休憩、恢复活力。"),
    ],
    experience: L("A calm guest residence for executive and team stays, with sleeping capacity for nine guests and amenities designed for a comfortable visit.", "宁静的宾客居所，适合高管与团队入住，可供9人就寝，各项设施让来访更加舒适。"),
    keywords: [
      { title: L("Executive Stay", "高管入住"), body: L("A comfortable base for domestic and international executives visiting Pangyo.", "为来访板桥的国内外高管提供舒适的落脚之处。") },
      { title: L("Guest Accommodation", "宾客住宿"), body: L("Nine beds and two bathrooms serve a group of up to nine guests.", "9张床和2间卫生间，可供最多9人的团体入住。") },
      { title: L("Extended Visit", "长期来访"), body: L("A quiet place to rest and recharge during short- or long-term visits.", "短期或长期来访期间，安静休憩、恢复活力的好去处。") },
    ],
    facts: [
      { label: L("Guests", "可住人数"), value: "9" },
      { label: L("Beds", "床位"), value: "9" },
      { label: L("Bathrooms", "卫生间"), value: "2" },
    ],
    amenities: [
      L("TV", "电视"),
      L("Massage Chair", "按摩椅"),
      L("Clothing Care System", "衣物护理机"),
      L("Washing Machine", "洗衣机"),
      L("Dryer", "干衣机"),
      L("Climate Control", "冷暖空调"),
      L("Robot Vacuum Cleaner", "扫地机器人"),
      L("Dishwasher", "洗碗机"),
      L("Induction Cooktop", "电磁炉"),
      L("Microwave", "微波炉"),
      L("Multi Cooker", "多功能电饭煲"),
      L("Air Purifier", "空气净化器"),
      L("Hair Dryer", "吹风机"),
    ],
    signature: [L("Massage Chair", "按摩椅"), L("Dryer", "干衣机"), L("Microwave", "微波炉")],
    hero: { src: "/images/404-hero.png", alt: L("Guest Room living room with leather sofas and wood slat wall", "宾客套房客厅，配有皮质沙发和木格栅墙"), position: "50% 60%" },
    living: { src: "/images/404-living.png", alt: L("Guest Room living room with two sofa sets", "宾客套房客厅，配有两组沙发") },
    spaces: [
      { name: L("Dining Lounge", "餐饮休息区"), src: "/images/404-dining-lounge.png", alt: L("Guest Room dining table and kitchen island", "宾客套房餐桌与厨房岛台") },
      { name: L("Santiago", "圣地亚哥"), src: "/images/404-santiago.png", alt: L("Santiago bedroom in the Guest Room", "宾客套房圣地亚哥卧室"), position: "50% 60%" },
      { name: L("Burgos / León", "布尔戈斯 / 莱昂"), src: "/images/404-burgos-leon.png", alt: L("Burgos / León bedroom in the Guest Room", "宾客套房布尔戈斯 / 莱昂卧室") },
      { name: L("Attic", "阁楼"), src: "/images/404-attic.png", alt: L("Guest Room attic with desks and beds", "宾客套房阁楼，配有书桌和床") },
    ],
  };

  return { businessRoom, guestRoom };
}
