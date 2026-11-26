import type { L } from "@/i18n/core";



export function contactContent(L: L) {
  // Contact form content. Submissions open in the visitor's email app (see ContactForm.tsx).
  // TODO(operator): confirm the retention period before launch.

  const inquiryTypes = [
    L("Business Stay", "商务入住"),
    L("Business Room", "商务套房"),
    L("Guest Room", "宾客套房"),
    L("Parking Registration", "停车登记"),
    L("Other", "其他"),
  ];

  const privacyConsent = {
    items: L("Name, company, email, phone number, inquiry details", "姓名、公司、电子邮箱、电话号码、咨询内容"),
    purpose: L("To respond to your inquiry and arrange your visit", "用于回复您的咨询并安排来访"),
    retention: L("Deleted once the inquiry has been handled", "咨询处理完毕后即予删除"),
  };

  return { inquiryTypes, privacyConsent };
}
