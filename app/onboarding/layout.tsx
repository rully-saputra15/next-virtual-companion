import { Metadata } from "next";
import React from "react";
import OnboardingWrapper from "./wrapper";

export const metadata: Metadata = {
  title: "Get Started - Convo",
  description: "Quick setup to personalize your anonymous chat experience.",
  robots: {
    index: false, // Onboarding shouldn't be indexed directly
    follow: true,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OnboardingWrapper>{children}</OnboardingWrapper>
    </>
  );
}
