"use client";

import { Container, SectionLabel } from "@/components/ui";
import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";
import { useL } from "@/i18n/client";

// TODO(operator): review with the operator before launch (retention period, contact for privacy requests).
export default function PrivacyView() {
  const L = useL();
  const { site } = siteContent(L);
  const { privacyConsent } = contactContent(L);
  return (
    <section className="bg-warm-white pb-28 pt-40 md:pt-48">
      <Container className="max-w-[820px]">
        <SectionLabel>{L("Privacy Notice", "隐私声明")}</SectionLabel>
        <h1 className="mt-5 font-serif text-[44px] font-light leading-none md:text-[60px]">{L("Your Information", "您的个人信息")}</h1>
        <div className="mt-12 space-y-10 text-[15px] leading-[1.9] text-charcoal/80">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">{L("Collected items", "收集项目")}</h2>
            <p className="mt-2">{privacyConsent.items}{L(", submitted through the contact form.", "（通过咨询表单提交）。")}</p>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">{L("Purpose", "使用目的")}</h2>
            <p className="mt-2">{privacyConsent.purpose}{L(".", "。")}</p>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">{L("Retention", "保存期限")}</h2>
            <p className="mt-2">{privacyConsent.retention}{L(".", "。")}</p>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-charcoal">{L("Operator", "运营方")}</h2>
            <p className="mt-2">
              {L(
                `${site.name} is operated by ${site.operator}. Inquiry details are emailed to ${site.operator} by a mail script the operator runs on its own Google account; no third-party form service receives them.`,
                `${site.name}由 ${site.operator} 运营。咨询内容由运营方在其自有 Google 账户上运行的邮件程序以邮件形式发送给 ${site.operator}，任何第三方表单服务均不会接收这些内容。`,
              )}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
