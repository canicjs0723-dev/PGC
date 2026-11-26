import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { rootMeta } from "@/views/meta";
import "./globals.css";

export const metadata: Metadata = rootMeta("en");

// Pages under /zh are Chinese: mark <html lang> before the first paint, so the Chinese fonts and line
// breaking (globals.css, html:lang(zh)) apply to the header and footer too, not only to the page body.
const markLanguage = `if(/\\/zh(\\/|$)/.test(location.pathname))document.documentElement.lang="zh-CN"`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: markLanguage }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
