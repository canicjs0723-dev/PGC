import type { L } from "@/i18n/core";


export type GuidelineIcon = ReturnType<typeof guideContent>["guidelines"][number]["icon"];

export function guideContent(L: L) {
  // Public visitor guide. Access codes, Wi-Fi credentials and host contacts stay in the private guest guide.

  const guidelines = [
    {
      icon: "quiet",
      title: L("Keep It Quiet", "保持安静"),
      body: L("To ensure a focused and relaxing environment for everyone, please maintain a quiet atmosphere, especially during late-night and early-morning hours.", "为给每位住客营造专注、放松的环境，请保持安静，深夜和清晨时段尤其如此。"),
    },
    {
      icon: "power",
      title: L("Turn Off Before Leaving", "离开前关闭电源"),
      body: L("For energy conservation and safety, please turn off all lights and electronic appliances, including air conditioning and heating, before you leave.", "为节约能源并确保安全，离开前请关闭所有灯具和电器，包括空调与暖气。"),
    },
    {
      icon: "care",
      title: L("Handle With Care", "爱护设施"),
      body: L("Please handle all room amenities and facilities with care. If any damage or contamination occurs, notify the person in charge immediately.", "请爱护房内所有用品和设施。如有损坏或污损，请立即告知负责人。"),
    },
    {
      icon: "waste",
      title: L("Waste Separation", "垃圾分类"),
      body: L("Please separate your waste properly and dispose of it in the designated recycling bins.", "请正确分类垃圾，并投放至指定的回收箱。"),
    },
    {
      icon: "smoke",
      title: L("Smoking Areas Only", "仅限吸烟区吸烟"),
      body: L("The property, including all rooms and terraces, is strictly non-smoking. Please use only the designated outdoor smoking areas.", "园区内（包括所有房间和露台）严禁吸烟。请仅在指定的室外吸烟区吸烟。"),
    },
    {
      icon: "lock",
      title: L("Lock the Door", "随手锁门"),
      body: L("For your security and privacy, please make sure the door is fully locked whenever you leave your room or meeting spaces.", "为保障您的安全与隐私，每次离开房间或会议空间时，请确认门已锁好。"),
    },
  ] as const;

  const faq = [
    {
      q: L("How do I register parking?", "如何办理停车登记？"),
      a: [
        L("Please inform the host before your visit with the details below. Parking registration will be arranged in advance once the information is received.", "请在来访前将以下信息告知接待人员。收到信息后，我们将提前为您办理停车登记。"),
      ],
      list: [
        L("Number of visitors & period of stay", "来访人数及入住期间"),
        L("Vehicle license plate number & registration status", "车牌号码及登记状态"),
        L("Applicant's name & contact information", "申请人姓名及联系方式"),
      ],
    },
    {
      q: L("Is food delivery or bringing outside food allowed?", "可以点外卖或自带食物吗？"),
      a: [
        L("Yes, food delivery and outside food are allowed. Deliveries will be made to your door. However, please avoid cooking or foods with strong odors.", "可以，允许点外卖和自带食物，外卖会送到门口。但请避免烹饪或食用气味浓烈的食物。"),
      ],
    },
    {
      q: L("Are there attractions to visit near Pangyo Global Campus?", "板桥环球园区附近有可游览的景点吗？"),
      a: [
        L("Yes, several major attractions are accessible within a 20 to 50-minute drive from the campus.", "有，从园区出发驾车20至50分钟即可到达多个热门景点。"),
      ],
      list: [
        L("Seoul Grand Park — approx. 17 km, around 25 min by car", "首尔大公园 — 约17 km，车程约25分钟"),
        L("Lotte Premium Outlet Uiwang — approx. 20 km, around 20 min by car", "乐天名品奥特莱斯义王店 — 约20 km，车程约20分钟"),
        L("Lotte World — approx. 22 km, around 35 min by car", "乐天世界 — 约22 km，车程约35分钟"),
        L("Gangnam COEX — approx. 25 km, around 35 min by car", "江南COEX — 约25 km，车程约35分钟"),
        L("Myeong-dong Street — approx. 27 km, around 50 min by car", "明洞街 — 约27 km，车程约50分钟"),
      ],
    },
    {
      q: L("How do I get building access and Wi-Fi details?", "如何获取楼栋出入信息和Wi-Fi信息？"),
      a: [
        L("For guest security, access information and Wi-Fi details are not published on this website. They are shared privately with confirmed guests before arrival.", "为保障住客安全，出入信息和Wi-Fi信息不在本网站公开，将在抵达前单独告知已确认的住客。"),
      ],
    },
  ];

  // "Your Stay" steps on the Information (Guide) page.
  const stayGuide: { title: string; body: string }[] = [
    {
      title: L("Before Arrival", "抵达之前"),
      body: L("Rooms are assigned in advance based on your stay schedule. Room details will be shared before arrival. If parking is needed, please provide your vehicle information for pre-registration.", "我们将根据您的入住日程提前分配房间，并在您抵达前告知房间详情。如需停车，请提供车辆信息以便预先登记。"),
    },
    {
      title: L("Arrival & Check-in", "抵达与入住"),
      body: L("Upon arrival at TH212, please use the secondary entrance and proceed to Building 205. Follow the check-in instructions shared in advance to access your assigned room.", "抵达TH212后，请从侧门进入并前往205栋。按照事先告知的入住说明进入为您分配的房间。"),
    },
    {
      title: L("During Your Stay", "入住期间"),
      body: L("Please refer to the in-room guide for Wi-Fi, lighting, appliances, and other facilities. Kindly follow the house guidelines to ensure a comfortable stay for everyone.", "Wi-Fi、照明、电器及其他设施的使用方法，请参阅房内指南。请遵守住宿须知，让每位住客都能舒适入住。"),
    },
    {
      title: L("Check-out", "退房"),
      body: L("Before leaving, please check your belongings, turn off lights and appliances, and leave the room tidy. Kindly notify your host upon departure.", "离开前请检查随身物品，关闭灯具和电器，并保持房间整洁。离开时请告知接待人员。"),
    },
  ];

  return { guidelines, faq, stayGuide };
}
