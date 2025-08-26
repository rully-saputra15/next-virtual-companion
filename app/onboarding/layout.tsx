"use client";
import { OnboardingProvider } from "@/views/OnboardingPage/useOnboardingPage";
import Head from "next/head";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Convo - Onboarding</title>
      </Head>
      <OnboardingProvider>{children}</OnboardingProvider>
    </>
  );
}
