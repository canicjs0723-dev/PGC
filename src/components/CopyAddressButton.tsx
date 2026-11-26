"use client";

import { useState } from "react";
import { useL } from "@/i18n/client";

export default function CopyAddressButton({ address }: { address: string }) {
  const L = useL();
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setStatus("copied");
    } catch (error) {
      console.error("Unable to copy the PGC address to the clipboard.", error);
      setStatus("error");
    }
  }

  return (
    <div className="mt-4">
      <button type="button" onClick={copyAddress} className="border-b border-charcoal/40 pb-1 text-[13px] hover:border-charcoal">
        {status === "copied" ? L("Address copied", "地址已复制") : L("Copy address", "复制地址")}
      </button>
      {status === "error" && <p className="mt-2 text-[13px] text-red-700" role="alert">{L("Could not copy address. Please copy it manually.", "无法复制地址，请手动复制。")}</p>}
    </div>
  );
}
