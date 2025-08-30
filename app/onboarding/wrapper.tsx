"use client";
import React from "react";
import { OnboardingProvider } from "@/views/OnboardingPage/useOnboardingPage";
const OnboardingWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <OnboardingProvider>{children}</OnboardingProvider>;
};

export default OnboardingWrapper;
