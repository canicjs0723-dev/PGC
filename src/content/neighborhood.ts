import type { L } from "@/i18n/core";

// Neighborhood tab (Information → Neighborhood). DRAFT CONTENT: names, distances, times and hours below were
// read from the design mock-up and must be checked against Naver Map before publishing. Edit here only.
// `query` is the Naver Map search used by the Map button (Korean name where known).
// To add a photo, put the file in public/images/neighborhood/ and set `photo` on that place.

export type CategoryKey = "dining" | "visit" | "essentials";

export type Icon = "dining" | "coffee" | "bakery" | "store" | "cart" | "pharmacy" | "clinic" | "laundry" | "park" | "shopping" | "culture" | "nature";

export type Place = {
  name: string;
  kind: string;
  icon: Icon;
  /** e.g. "2 min walk" or "~8 min by car". Leave out to hide the time line. */
  time?: string;
  distance?: string;
  hours?: string;
  note?: string;
  /** Labelled rows shown as a small table on the card, e.g. { label: "Hours", lines: ["Mon 11:00–20:00"] }. */
  details?: { label: string; lines: string[] }[];
  query: string;
  /** Card photo in public/images/neighborhood/, e.g. "/images/neighborhood/visit-01.jpg". Leave out to show the icon tile. */
  photo?: string;
  /** Exact Naver Map place page; when set, the Map button opens it instead of a search for `query`. */
  mapUrl?: string;
};

export type Category = {
  key: CategoryKey;
  label: string;
  /** Cover photo on the category card; leave out to show the icon tile. */
  cover?: string;
  /** object-position for the cover crop, e.g. "70% 50%". */
  coverPosition?: string;
  sub: string;
  icon: Icon;
  eyebrow: string;
  title: string;
  intro: string;
  footnote: string;
  places: Place[];
};

const near = (q: string) => `${q} 판교 대장동`;

export const naverMap = (query: string) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;

export function neighborhoodContent(L: L) {

  const categories: Category[] = [
    {
      key: "essentials",
      label: L("Everyday Essentials", "生活必需"),
      sub: L("Store, pharmacy, mart & more · on foot", "便利店、药店、超市等 · 步行可达"),
      cover: "/images/neighborhood/cover-essentials-v2.webp",
      icon: "store",
      eyebrow: L("Everyday Essentials", "生活必需"),
      title: L("On Foot", "步行可达"),
      intro: L("Eight everyday places within a twenty-minute walk of Building 205 — from morning coffee to a late pharmacy run.", "从205栋步行20分钟内可达的8处日常场所——从清晨咖啡到夜间买药，一应俱全。"),
      footnote: L("Illustrative map, not to scale. Walking times and distances are approximate; hours may change.", "示意地图，未按比例绘制。步行时间和距离均为约数，营业时间可能变动。"),
      places: [
        { name: L("CU Daejang", "CU便利店 大庄店"), kind: L("Convenience store", "便利店"), icon: "store", time: L("3 min walk", "步行3分钟"), distance: "180 m", hours: L("Open 24 hours", "24小时营业"), query: near("CU"), photo: "/images/neighborhood/ess-01-cu.webp", mapUrl: "https://map.naver.com/p/search/CU%20%ED%8C%90%EA%B5%90SK%EB%B7%B0%ED%85%8C%EB%9D%BC%EC%8A%A4%EC%A0%90?c=20.00,0,0,0,dh" },
        { name: L("Pascucci Pangyo Daejang", "Pascucci 板桥大庄店"), kind: L("Café", "咖啡馆"), icon: "coffee", time: L("8 min walk", "步行8分钟"), distance: "450 m", hours: L("Daily 07:00–22:00", "每天 07:00–22:00"), query: near("파스쿠찌"), photo: "/images/neighborhood/ess-02-pascucci.webp", mapUrl: "https://map.naver.com/p/search/%ED%8C%8C%EC%8A%A4%EC%BF%A0%EC%B0%8C%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1205108662?c=15.00,0,0,0,dh" },
        { name: L("Tous les Jours Pangyo Daejang", "多乐之日 板桥大庄店"), kind: L("Bakery", "面包店"), icon: "bakery", time: L("5 min walk", "步行5分钟"), distance: "500 m", hours: L("Daily 07:00–22:00", "每天 07:00–22:00"), query: near("뚜레쥬르"), photo: "/images/neighborhood/ess-03-tous-les-jours.webp", mapUrl: "https://map.naver.com/p/search/%EB%9A%9C%EB%A0%88%EC%A5%AC%EB%A5%B4%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1538874465?c=15.00,0,0,0,dh" },
        { name: L("GS THE FRESH Pangyo Daejang", "GS THE FRESH 板桥大庄店"), kind: L("Supermarket", "超市"), icon: "cart", time: L("15 min walk", "步行15分钟"), distance: "950 m", hours: L("Daily 09:00–22:00", "每天 09:00–22:00"), query: near("GS더프레시"), photo: "/images/neighborhood/ess-04-gs-the-fresh.webp", mapUrl: "https://map.naver.com/p/search/GS%EB%8D%94%ED%94%84%EB%A0%88%EC%8B%9C%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1768996245?c=15.00,0,0,0,dh" },
        { name: L("Chamyaksa Daejang Pharmacy", "Chamyaksa 大庄药店"), kind: L("Pharmacy · 참약사 대장약국", "药店 · 참약사 대장약국"), icon: "pharmacy", time: L("15 min walk", "步行15分钟"), distance: "900 m", hours: L("Mon–Fri 09:00–21:00 · Sat 09:00–18:00 · Sun closed", "周一至周五 09:00–21:00 · 周六 09:00–18:00 · 周日休息"), query: "참약사 대장약국", photo: "/images/neighborhood/ess-05-pharmacy.webp", mapUrl: "https://map.naver.com/p/search/%EC%B0%B8%EC%95%BD%EC%82%AC%EB%8C%80%EC%9E%A5%EC%95%BD%EA%B5%AD/place/1153781860?c=15.00,0,0,0,dh" },
        { name: L("Pangyo Barun Internal Medicine", "板桥Barun内科"), kind: L("Clinic · Internal medicine · 판교바른내과", "诊所 · 内科 · 판교바른내과"), icon: "clinic", time: L("14 min walk", "步行14分钟"), distance: "910 m", hours: L("Mon–Fri 08:30–18:30 · Sat 08:30–13:00 · Sun & holidays closed", "周一至周五 08:30–18:30 · 周六 08:30–13:00 · 周日及节假日休息"), note: L("Lunch 13:00–14:00", "午休 13:00–14:00"), query: "판교바른내과", photo: "/images/neighborhood/ess-06-pangyo-barun.webp", mapUrl: "https://map.naver.com/p/search/%ED%8C%90%EA%B5%90%EB%B0%94%EB%A5%B8%EB%82%B4%EA%B3%BC%EC%9D%98%EC%9B%90/place/1046278098?c=15.00,0,0,0,dh" },
        { name: L("CleanTopia", "CleanTopia 洗衣店"), kind: L("Laundry", "洗衣店"), icon: "laundry", time: L("6 min walk", "步行6分钟"), distance: "420 m", hours: L("Mon–Fri 08:00–21:00 · Sat–Sun 09:00–20:00", "周一至周五 08:00–21:00 · 周六至周日 09:00–20:00"), query: near("크린토피아"), photo: "/images/neighborhood/ess-07-cleantopia.webp", mapUrl: "https://map.naver.com/p/search/%ED%81%AC%EB%A6%B0%ED%86%A0%ED%94%BC%EC%95%84%20%EC%BD%94%EC%9D%B8%EC%9B%8C%EC%8B%9C%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%ED%9E%90%EC%8A%A4%EC%A0%90/place/1669719513?c=15.00,0,0,0,dh" },
        { name: L("Daejang Neighborhood Park", "大庄近邻公园"), kind: L("Park · 대장근린공원", "公园 · 대장근린공원"), icon: "park", time: L("20 min walk", "步行20分钟"), distance: "1.4 km", hours: L("Open all day", "全天开放"), query: "대장근린공원", photo: "/images/neighborhood/ess-08-park.webp", mapUrl: "https://map.naver.com/p/search/%EB%8C%80%EC%9E%A5%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/2140000890?c=15.00,0,0,0,dh" },
      ],
    },
    {
      key: "dining",
      label: L("Local Dining", "本地美食"),
      cover: "/images/neighborhood/cover-dining.webp",
      sub: L("Restaurants & cafés · by car", "餐厅与咖啡馆 · 驾车前往"),
      icon: "dining",
      eyebrow: L("Local Dining", "本地美食"),
      title: L("Nearby Favorites", "周边人气美食"),
      intro: L("Twelve local favourites around Daejang-dong — from gimbap and ramen to Korean barbecue and teppanyaki.", "大庄洞周边12家人气餐厅——从紫菜包饭、拉面到韩式烤肉和铁板烧。"),
      footnote: L("Hours may change; please check before visiting.", "营业时间可能变动，请在前往前确认。"),
      places: [
        { name: L("Barda Kim Seonsaeng", "Barda金先生"), kind: L("Gimbap · 바르다김선생", "紫菜包饭 · 바르다김선생"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Mon · Wed · Thu 11:00–20:00", "周一 · 周三 · 周四 11:00–20:00"), L("Fri – Sun 10:00–20:00", "周五至周日 10:00–20:00")] },
          { label: L("Break", "休息时间"), lines: ["15:00–17:00"] },
          { label: L("Closed", "休息日"), lines: [L("Every Tuesday", "每周二")] },
        ], query: near("바르다김선생"), photo: "/images/neighborhood/dining-01-barda-kim.webp", mapUrl: "https://map.naver.com/p/search/%EB%B0%94%EB%A5%B4%EB%8B%A4%EA%B9%80%EC%84%A0%EC%83%9D%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1828654732?c=15.00,0,0,0,dh" },
        { name: L("Seolle Jokbal", "Seolle猪蹄"), kind: L("Braised pork trotters · 설레족발", "酱猪蹄 · 설레족발"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Tue – Sun 17:00–24:00", "周二至周日 17:00–24:00")] },
          { label: L("Closed", "休息日"), lines: [L("Every Monday", "每周一")] },
        ], query: near("설레족발"), photo: "/images/neighborhood/dining-02-seolle-jokbal.webp", mapUrl: "https://map.naver.com/p/search/%EC%84%A4%EB%A0%88%EC%A1%B1%EB%B0%9C%20%EB%8C%80%EC%9E%A5%EB%8F%99%EC%A0%90?c=15.00,0,0,0,dh" },
        { name: L("Mom's Touch", "Mom's Touch 妈妈手"), kind: L("Burgers · 맘스터치", "汉堡 · 맘스터치"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Mon – Fri 10:50–21:30", "周一至周五 10:50–21:30"), L("Sat · Sun 10:30–21:30", "周六 · 周日 10:30–21:30")] },
        ], query: near("맘스터치"), photo: "/images/neighborhood/dining-03-moms-touch.webp", mapUrl: "https://map.naver.com/p/search/%EB%A7%98%EC%8A%A4%ED%84%B0%EC%B9%98%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1806014800?c=15.00,0,0,0,dh" },
        { name: L("BBQ Chicken", "BBQ炸鸡"), kind: L("Fried chicken · BBQ", "炸鸡 · BBQ"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Daily 11:00–23:00", "每天 11:00–23:00")] },
        ], query: near("BBQ"), photo: "/images/neighborhood/dining-04-bbq.webp", mapUrl: "https://map.naver.com/p/search/BBQ%EC%B9%98%ED%82%A8%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A7%80%EA%B5%AC%EC%A0%90/place/1975696630?c=15.00,0,0,0,dh" },
        { name: L("Daejang Dakbal", "大庄鸡爪"), kind: L("Spicy braised chicken · 대장닭발 닭도리탕", "辣炖鸡 · 대장닭발 닭도리탕"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Wed – Sun 17:00–22:00", "周三至周日 17:00–22:00")] },
          { label: L("Closed", "休息日"), lines: [L("Every Monday & Tuesday", "每周一及周二")] },
        ], query: near("대장닭발 닭도리탕"), photo: "/images/neighborhood/dining-05-daejang-dakbal.webp", mapUrl: "https://map.naver.com/p/search/%EB%8C%80%EC%9E%A5%EB%8B%AD%EB%B0%9C%26%EB%8B%AD%EB%8F%84%EB%A6%AC%ED%83%95%20%EB%B3%B8%EC%A0%90?c=15.00,0,0,0,dh" },
        { name: L("Teppan House", "Teppan House 铁板烧"), kind: L("Teppanyaki & seafood · 테판하우스", "铁板烧与海鲜 · 테판하우스"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Daily 10:00–22:00", "每天 10:00–22:00")] },
          { label: L("Break", "休息时间"), lines: ["15:00–16:30"] },
        ], query: near("테판하우스"), photo: "/images/neighborhood/dining-06-teppan-house.webp", mapUrl: "https://map.naver.com/p/search/%ED%85%8C%ED%8C%90%ED%95%98%EC%9A%B0%EC%8A%A4?c=15.00,0,0,0,dh" },
        { name: L("Uri Hanwoo Gomtang", "Uri韩牛牛骨汤"), kind: L("Beef bone soup · 우리한우 곰탕", "牛骨汤 · 우리한우 곰탕"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Mon – Sat 11:00–21:00", "周一至周六 11:00–21:00")] },
          { label: L("Break", "休息时间"), lines: ["15:00–17:00"] },
          { label: L("Closed", "休息日"), lines: [L("Every Sunday", "每周日")] },
        ], query: near("우리한우 곰탕"), photo: "/images/neighborhood/dining-07-uri-hanwoo-gomtang.webp", mapUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%ED%95%9C%EC%9A%B0%EA%B3%B0%ED%83%95/place/1098691608?c=15.00,0,0,0,dh" },
        { name: "Plantimore", kind: L("Pasta · 플랜티모어", "意大利面 · 플랜티모어"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Mon – Fri 09:00–20:00", "周一至周五 09:00–20:00"), L("Sat 09:00–16:00", "周六 09:00–16:00")] },
          { label: L("Closed", "休息日"), lines: [L("Every Sunday", "每周日")] },
        ], query: near("플랜티모어"), photo: "/images/neighborhood/dining-08-prantimore.webp", mapUrl: "https://map.naver.com/p/search/%ED%94%8C%EB%9E%9C%ED%8B%B0%EB%AA%A8%EC%96%B4/place/1522423823?c=15.00,0,0,0,dh" },
        { name: "Sikkeop", kind: L("Grilled pork belly · 식껍", "烤五花肉 · 식껍"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Mon · Tue 17:00–22:30", "周一 · 周二 17:00–22:30"), L("Thu – Sat 17:00–22:30", "周四至周六 17:00–22:30"), L("Sun 17:00–21:30", "周日 17:00–21:30")] },
          { label: L("Closed", "休息日"), lines: [L("Every Wednesday", "每周三")] },
        ], query: near("식껍"), photo: "/images/neighborhood/dining-09-sikkeop.webp", mapUrl: "https://map.naver.com/p/search/%EC%8B%9D%EA%BB%8D%20%EB%8C%80%EC%9E%A5%EC%A0%90/place/1749624502?c=15.00,0,0,0,dh" },
        { name: L("Oroji Ramen", "Oroji拉面"), kind: L("Ramen · 오로지라멘", "拉面 · 오로지라멘"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Tue – Fri 11:00–20:30", "周二至周五 11:00–20:30"), L("Sat 12:00–20:00", "周六 12:00–20:00"), L("Mon hours vary", "周一营业时间不定")] },
          { label: L("Break", "休息时间"), lines: [L("Tue – Fri 15:00–17:00", "周二至周五 15:00–17:00")] },
          { label: L("Closed", "休息日"), lines: [L("Every Sunday", "每周日")] },
        ], query: near("오로지라멘"), photo: "/images/neighborhood/dining-10-oroji-ramen.webp", mapUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%A1%9C%EC%A7%80%EB%9D%BC%EB%A9%98%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1851346244?c=15.00,0,0,0,dh" },
        { name: L("Pizza School", "Pizza School 披萨"), kind: L("Pizza · 피자스쿨", "披萨 · 피자스쿨"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Mon – Sat 11:00–21:00", "周一至周六 11:00–21:00"), L("Sun 16:30–20:00", "周日 16:30–20:00")] },
        ], query: near("피자스쿨"), photo: "/images/neighborhood/dining-12-pizza-school.webp", mapUrl: "https://map.naver.com/p/search/%ED%94%BC%EC%9E%90%EC%8A%A4%EC%BF%A8%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1381590885?c=15.00,0,0,0,dh" },
        { name: L("Hansot Dosirak", "韩松便当"), kind: L("Lunch boxes · 한솥도시락", "便当 · 한솥도시락"), icon: "dining", details: [
          { label: L("Hours", "营业时间"), lines: [L("Mon – Fri 10:00–20:00", "周一至周五 10:00–20:00"), L("Sat · Sun 09:00–14:00", "周六 · 周日 09:00–14:00")] },
        ], query: near("한솥도시락"), photo: "/images/neighborhood/dining-13-hansot.webp", mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%86%A5%EB%8F%84%EC%8B%9C%EB%9D%BD%20%ED%8C%90%EA%B5%90%EB%8C%80%EC%9E%A5%EC%A0%90/place/1045030790?c=15.00,0,0,0,dh" },
      ],
    },
    {
      key: "visit",
      label: L("Places to Visit", "游览胜地"),
      sub: L("Culture, shopping & nature · by car", "文化、购物与自然 · 驾车前往"),
      cover: "/images/neighborhood/visit-05-gyeongbokgung.webp",
      coverPosition: "30% 50%",
      icon: "culture",
      eyebrow: L("Places to Visit", "游览胜地"),
      title: L("Further Afield", "稍远去处"),
      intro: L("For a free afternoon between meetings, or a weekend in and around Seoul — eight places within about forty-five minutes by car.", "无论是会议间隙的闲暇午后，还是首尔及周边的周末时光——这里有8处车程约45分钟内可达的好去处。"),
      footnote: L("Travel times are approximate and vary with traffic. Hours may change; please check before visiting.", "行车时间为约数，视交通状况而定。营业时间可能变动，请在前往前确认。"),
      places: [
        { name: L("Lotte World", "乐天世界"), kind: L("Theme park", "主题乐园"), icon: "culture", time: L("~31 min by car", "车程约31分钟"), distance: "24 km", note: L("Indoor and outdoor theme park in Jamsil, beside Lotte World Tower.", "位于蚕室、紧邻乐天世界塔的室内外主题乐园。"), query: "롯데월드", photo: "/images/neighborhood/visit-lotte-world.webp", mapUrl: "https://map.naver.com/p/entry/place/11583235?c=12.00,0,0,0,dh" },
        { name: L("COEX, Gangnam", "江南COEX"), kind: L("Shopping", "购物"), icon: "shopping", time: L("~31 min by car", "车程约31分钟"), distance: "21 km", note: L("Convention centre and underground mall in Gangnam, home to the Starfield Library.", "江南的会展中心与地下购物中心，星空图书馆就在这里。"), query: "코엑스", photo: "/images/neighborhood/visit-coex.webp", mapUrl: "https://map.naver.com/p/search/%EC%BD%94%EC%97%91%EC%8A%A4/place/11576171?c=15.00,0,0,0,dh" },
        { name: L("The Hyundai Pangyo", "现代百货 板桥店"), kind: L("Shopping", "购物"), icon: "shopping", time: L("~12 min by car", "车程约12分钟"), distance: "7.4 km", note: L("Shopping, dining and culture under one roof.", "购物、餐饮与文化，一站尽享。"), query: "현대백화점 판교점", photo: "/images/neighborhood/visit-02-the-hyundai-pangyo.webp", mapUrl: "https://map.naver.com/p/search/%ED%98%84%EB%8C%80%EB%B0%B1%ED%99%94%EC%A0%90%20%ED%8C%90%EA%B5%90%EC%A0%90/place/31564929?c=15.00,0,0,0,dh" },
        { name: L("Gogi Valley, Yongin", "龙仁古基里溪谷"), kind: L("Nature", "自然"), icon: "nature", time: L("~10 min by car", "车程约10分钟"), distance: "4.1 km", note: L("Relaxed meals and cafés along a wooded valley stream.", "沿林间溪谷而设的餐厅与咖啡馆，悠闲惬意。"), query: "용인 고기리계곡", photo: "/images/neighborhood/visit-03-gogi-valley.webp", mapUrl: "https://map.naver.com/p/search/%EC%9A%A9%EC%9D%B8%20%EA%B3%A0%EA%B8%B0%EB%A6%AC%EA%B3%84%EA%B3%A1/place/13491741?c=15.00,0,0,0,dh" },
        { name: L("Starfield Suwon", "星空购物中心 水原店"), kind: L("Shopping", "购物"), icon: "shopping", time: L("~25 min by car", "车程约25分钟"), distance: "17 km", note: L("Shopping, dining and a cinema in one large complex.", "集购物、餐饮与影院于一体的大型综合体。"), query: "스타필드 수원", photo: "/images/neighborhood/visit-04-starfield-suwon.webp", mapUrl: "https://map.naver.com/p/search/%EC%8A%A4%ED%83%80%ED%95%84%EB%93%9C%20%EC%88%98%EC%9B%90/place/1045275610?c=15.00,0,0,0,dh" },
        { name: L("Gwanghwamun & Gyeongbokgung", "光化门与景福宫"), kind: L("Culture", "文化"), icon: "culture", time: L("~45 min by car", "车程约45分钟"), distance: "29 km", note: L("Seoul's principal royal palace, at the historic heart of the city.", "首尔最主要的王宫，位于城市的历史中心。"), query: "경복궁", photo: "/images/neighborhood/visit-05-gyeongbokgung.webp", mapUrl: "https://map.naver.com/p/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?c=15.00,0,0,0,dh" },
        { name: L("Korean Folk Village, Yongin", "龙仁韩国民俗村"), kind: L("Culture", "文化"), icon: "culture", time: L("~30 min by car", "车程约30分钟"), distance: "19 km", note: L("Traditional houses, hands-on experiences and seasonal festivals.", "传统民居、亲身体验项目与四季庆典。"), query: "한국민속촌", photo: "/images/neighborhood/visit-06-korean-folk-village.webp", mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EA%B5%AD%EB%AF%BC%EC%86%8D%EC%B4%8C/place/11620801?c=15.00,0,0,0,dh" },
        { name: L("Myeongdong", "明洞"), kind: L("Shopping", "购物"), icon: "shopping", time: L("~40 min by car", "车程约40分钟"), distance: "26 km", note: L("Seoul's best-known shopping street, with beauty brands and street food.", "首尔最知名的购物街，美妆品牌与街头小吃云集。"), query: "명동", photo: "/images/neighborhood/visit-07-myeongdong.webp", mapUrl: "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%208%EB%B2%88%EC%B6%9C%EA%B5%AC/place/21405078?c=15.00,0,0,0,dh" },
      ],
    },
  ];

  return { categories };
}
