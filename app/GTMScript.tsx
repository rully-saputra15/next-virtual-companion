"use client";

import Script from "next/script";
import { initialize } from "@/lib/tracking";

export default function GTMScript() {
  return (
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-MSH2Z60CEK"
      onLoad={initialize}
    />
  );
}
