"use client";
import { ChatPageProvider } from "@/views/ChatPage/useChatPage";
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
        <title>Convo - I'll listen</title>
      </Head>
      <ChatPageProvider>{children}</ChatPageProvider>
    </>
  );
}
