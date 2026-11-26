import type { L } from "@/i18n/core";

// Source of truth: "PGC Overview_EN.pdf" (RONDA KOREA) + Notion guest guides (403 / 404).
// PRIVATE — never add here: door/access codes, Wi-Fi credentials.
// Inquiry email, phones and WeChat QR below are published with the owner's approval (2026-10-11).

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export function siteContent(L: L) {

  const nav: NavItem[] = [
    { label: L("About", "关于我们"), href: "/about" },
    {
      label: L("Rooms", "客房"),
      href: "/business-room",
    },
    // Information opens on Location; the stay Guide is the last tab under Rooms (/guide).
    { label: L("Information", "周边信息"), href: "/information/location" },
    { label: L("Contact", "联系我们"), href: "/contact" },
  ];

  const site = {
    name: L("Pangyo Global Campus", "板桥环球园区"),
    short: "PGC",
    tagline: L("A refined stay for work and rest.", "兼顾工作与休憩的雅致居所。"),
    operator: "RONDA KOREA",
    complex: L("TH212 Pangyo", "板桥TH212"),
    address: {
      rooms: L("Building 205, Units 403 & 404", "205栋 403、404室"),
      street: L("25, Pangyodaejang-ro 2-gil, Bundang-gu, Seongnam-si", "城南市盆唐区板桥大庄路2街25"),
      lot: L("Daejang-dong 596", "大庄洞596"),
      country: L("Republic of Korea", "韩国"),
    },
    // Business inquiry line printed in the official brochure (not a personal number).
    inquiryPhone: "031-613-2360",
    inquiryPhoneTel: "+82316132360",
    inquiryEmail: "evan.kim@rondakorea.com",
    // Contact form mailer: the Web app URL of docs/contact-form-apps-script.gs deployed from the operator's Google
    // account (https://script.google.com/macros/s/…/exec). It emails each inquiry to inquiryEmail. Empty = not set up.
    contactFormUrl: "https://script.google.com/macros/s/AKfycbxpR-3_bFYw2pt8llZ-nQEhOFh-DuUPrCDB34EwNEDxFi8Mc27U6Vvwv1Uya234rxU/exec",
    // Web3Forms access key for the contact form (from web3forms.com, created for inquiryEmail). Web3Forms
    // designs this key to sit in public page code: it can only send to the inbox it was created for.
    // Empty = the form opens the visitor's email app instead.
    web3formsAccessKey: "",
    managementPhone: "031-711-7691",
    managementPhoneTel: "+82317117691",
    // Search term for the external map links and the embedded map: the complex's registered name.
    mapSearchKo: "판교TH212",
    // Google query (embedded map and Google Maps button): the complex name followed by its registered
    // road address (판교대장로7길 25, 17160), so Google lands on TH212 rather than another "TH212" match.
    mapGoogleKo: "판교TH212 경기도 성남시 분당구 판교대장로7길 25",
  };

  const intro = {
    label: L("About PGC", "关于PGC"),
    headline: [L("A New Standard", "商务居住"), L("in Business Stays", "新标准")],
    lead: L("A place where business and comfort connect naturally.", "让商务与舒适自然相融的地方。"),
    body: [
      L("Located in Daejang-dong, Pangyo, Pangyo Global Campus is an upscale residence with private terraces, bringing nature and seasonal outdoor living into everyday life.", "板桥环球园区坐落于板桥大庄洞，是一处配有私家露台的高端住宅，将自然与四季户外生活融入日常。"),
      L("Designed for employees, global partners, and visitors, it offers a refined, comfortable setting that brings work, relaxation, and meaningful connections together.", "园区专为员工、全球合作伙伴及来访宾客打造，以雅致舒适的环境，将工作、休憩与有意义的交流融为一体。"),
    ],
  };

  const identity = [
    {
      key: L("WORK", "工作"),
      line: L("A productive environment for focus and efficiency.", "专注高效的工作环境。"),
      detail: L("A space that enables seamless work and enhances performance.", "让工作顺畅无阻、效率倍增的空间。"),
      image: "/images/identity-work-2026.jpg",
      alt: L("Colleagues reviewing documents together", "同事们一起查阅文件"),
    },
    {
      key: L("STAY", "居住"),
      line: L("Premium living designed for comfort and privacy.", "兼顾舒适与私密的高品质居住。"),
      detail: L("A space designed for comfortable rest and privacy.", "为舒适休憩与私密而设计的空间。"),
      image: "/images/identity-stay-2026.jpg",
      alt: L("A sunlit bedroom with a made bed and an armchair", "阳光充足的卧室，床铺整洁，配有扶手椅"),
    },
    {
      key: L("CONNECT", "交流"),
      line: L("Seamless networking for meaningful connections.", "轻松自如的交流，建立有意义的联系。"),
      detail: L("A space that brings employees and global partners together.", "让员工与全球合作伙伴相聚的空间。"),
      image: "/images/identity-connect-2026.jpg",
      alt: L("Partners meeting in a bright lounge", "合作伙伴在明亮的休息室中会面"),
    },
  ];

  const directions = [
    { from: L("Head Office", "总部"), distance: "21 km", time: L("30 min by car", "车程30分钟") },
    { from: L("Gimpo International Airport", "金浦国际机场"), distance: "50 km", time: L("90 min by car", "车程90分钟") },
    { from: L("Incheon International Airport", "仁川国际机场"), distance: "75 km", time: L("90 min by car", "车程90分钟") },
  ];

  const advantages = [
    {
      title: L("Connectivity", "交通便利"),
      body: L("Convenient access via Seopangyo Tunnel, GTX-A Seongnam Station, Seopangyo Station, the Shinbundang and Bundang Lines, and Seopangyo IC.", "经西板桥隧道、GTX-A城南站、西板桥站、新盆唐线与盆唐线以及西板桥IC，出行便捷。"),
    },
    {
      title: L("Local Amenities", "生活配套"),
      body: L("Nearby amenities include Hyundai Department Store in Pangyo New Town, Seoul National University Hospital, Homeplus, and the shops and neighborhood facilities of Pangyo Daejang District.", "周边有板桥新城现代百货、首尔大学医院、Homeplus，以及板桥大庄地区的商铺和社区设施。"),
    },
    {
      title: L("Nearby Attractions", "周边景点"),
      body: L("Lotte Premium Outlet Uiwang (20 km, 20 min), Lotte World (22 km, 35 min), Seoul Grand Park (17 km, 25 min), Gangnam COEX (25 km, 35 min), and Myeong-dong (27 km, 50 min).", "乐天名品奥特莱斯义王店（20 km，20分钟）、乐天世界（22 km，35分钟）、首尔大公园（17 km，25分钟）、江南COEX（25 km，35分钟）以及明洞（27 km，50分钟）。"),
    },
    {
      title: L("Nature & Outdoors", "自然与户外"),
      body: L("Enjoy a nature-rich setting with easy access to Gogiri Valley, Cheonggyesan, Gwanggyosan, and Barasan Recreational Forest.", "坐享丰富的自然环境，可便捷前往古基里溪谷、清溪山、光教山和巴拉山自然休养林。"),
    },
  ];

  const parking = {
    title: L("Parking Registration", "停车登记"),
    note: L("Parking is available only after pre-registration is completed.", "须完成预先登记后方可停车。"),
    entrance: L("For easier access, please use the Building 204 side entrance, then proceed to Building 205.", "为方便出入，请从204栋一侧的入口进入，再前往205栋。"),
    required: [
      L("Number of visitors & duration of stay", "来访人数及入住时长"),
      L("Vehicle license plate number & registration status", "车牌号码及登记状态"),
      L("Applicant's name & contact information", "申请人姓名及联系方式"),
    ],
  };

  const roomUseCases = [
    {
      title: L("Executive Stay", "高管入住"),
      body: L("A comfortable base for visiting domestic and international executives, including extended stays. The Guest Room accommodates up to 9 guests with 9 beds and 2 bathrooms.", "为来访的国内外高管提供舒适的落脚之处，也适合长期入住。宾客套房最多可住9人，设有9张床和2间卫生间。"),
      room: L("Guest Room", "宾客套房"),
      href: "/guest-room",
    },
    {
      title: L("Corporate Workshop", "企业研讨会"),
      body: L("Bring a small workshop and overnight stay together in the Business Room, with a projector, audio equipment, dining lounge and five beds.", "在商务套房中同时安排小型研讨会与住宿，配有投影仪、音响设备、餐饮休息区和5张床。"),
      room: L("Business Room", "商务套房"),
      href: "/business-room",
    },
    {
      title: L("Partner Meeting", "合作伙伴会议"),
      body: L("Host a private meeting with clients or global partners in the Business Room, with presentation equipment and an adjoining lounge.", "在商务套房与客户或全球合作伙伴进行私密会谈，配有演示设备和相邻的休息区。"),
      room: L("Business Room", "商务套房"),
      href: "/business-room",
    },
    {
      title: L("Team Offsite", "团队外出活动"),
      body: L("Combine a focused session, shared meals and team conversation in the Business Room, with overnight accommodation available for up to five.", "在商务套房中将专注研讨、共同用餐与团队交流融为一体，并可供最多5人留宿。"),
      room: L("Business Room", "商务套房"),
      href: "/business-room",
    },
  ];

  return { nav, site, intro, identity, directions, advantages, parking, roomUseCases };
}
