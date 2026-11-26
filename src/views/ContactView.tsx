"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import InquiryOffice from "@/components/InquiryOffice";
import { Container, SectionLabel } from "@/components/ui";
import { siteContent } from "@/content/site";
import { useL } from "@/i18n/client";

export default function ContactView() {
  const L = useL();
  const { site } = siteContent(L);
  return (
    <>
    <section className="bg-warm-white">
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="relative hidden bg-charcoal lg:block">
          <div className="sticky top-0 h-svh">
            <div className="relative h-full">
              <Image
                src="/images/404-hero.png"
                alt={L("Guest Room living room", "宾客套房客厅")}
                fill
                priority
                sizes="50vw"
                className="object-cover object-[40%_60%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
            </div>
          </div>
        </div>

        <div className="relative h-[48svh] min-h-[340px] bg-charcoal text-white lg:hidden">
          <Image
            src="/images/404-hero.png"
            alt={L("Guest Room living room", "宾客套房客厅")}
            fill
            priority
            sizes="(min-width: 1024px) 0px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/25" />
        </div>

        <Container className="py-16 lg:px-16 lg:py-40">
          <SectionLabel>{L("Contact Us", "联系我们")}</SectionLabel>
          <h1 className="mt-5 font-serif text-[40px] font-light leading-none md:text-[56px]">{L("Inquiry", "咨询")}</h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
            {L(
              "For business stays, guest arrangements and visit inquiries. Parking registration can also be requested here.",
              "商务住宿、宾客安排及参观咨询，均可在此提交。停车登记也可在此申请。",
            )}
          </p>
          <div className="mt-14">
            <ContactForm />
          </div>
          <address className="mt-16 border-t border-line pt-8 text-[13px] not-italic leading-relaxed text-charcoal/65">
            {L("Pangyo Global Campus (TH212) ·", "板桥环球园区（TH212）·")} {site.address.rooms}
            <br />
            {site.address.street} ({site.address.lot})
            <br />
            <a href={`tel:${site.inquiryPhoneTel}`} className="mt-2 inline-block underline underline-offset-4">
              {site.inquiryPhone}
            </a>
          </address>
        </Container>
      </div>
    </section>
    <InquiryOffice />
    </>
  );
}
