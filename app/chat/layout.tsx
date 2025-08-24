"use client";
import { ChatPageProvider } from "@/views/ChatPage/useChatPage";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChatPageProvider>{children}</ChatPageProvider>;
}
