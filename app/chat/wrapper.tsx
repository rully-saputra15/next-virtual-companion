"use client";
import React from "react";
import { ChatPageProvider } from "@/views/ChatPage/useChatPage";

const ChatPageWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ChatPageProvider>{children}</ChatPageProvider>;
};

export default ChatPageWrapper;
