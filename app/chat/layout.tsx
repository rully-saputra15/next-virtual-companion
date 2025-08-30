import { ChatPageProvider } from "@/views/ChatPage/useChatPage";
import React from "react";
import type { Metadata } from "next";
import ChatPageWrapper from "./wrapper";

export const metadata: Metadata = {
  title: "Private Chat - Convo",
  description:
    "Your private, anonymous conversation space. No judgment, no storage.",
  robots: {
    index: false, // Private content shouldn't be indexed
    follow: false,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ChatPageWrapper>{children}</ChatPageWrapper>
    </>
  );
}
