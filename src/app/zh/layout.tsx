import type { Metadata } from "next";
import { rootMeta } from "@/views/meta";

// Chinese site: the same pages as the English site, under /zh.
export const metadata: Metadata = rootMeta("zh");

export default function ChineseLayout({ children }: LayoutProps<"/zh">) {
  return <div lang="zh-CN">{children}</div>;
}
