
"use client"
import { OnboardingProvider } from "@/views/OnboardingPage/useOnboardingPage";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <OnboardingProvider>{children}</OnboardingProvider>;
}
