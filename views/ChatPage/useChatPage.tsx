import { basicIdentitySSKey } from "@/config/storage";
import React, { createContext, useContext, useEffect } from "react";

type TContext = ReturnType<typeof useChatPage>;
const initialState: TContext = {};

const ChatPageContext = createContext(initialState);

const useChatPage = () => {
  useEffect(() => {
    document.body.style.background = "white";
  }, []);

  useEffect(() => {
    const basicIdentity = sessionStorage.getItem(basicIdentitySSKey);
    console.log("val", JSON.parse(basicIdentity || ""));
  }, []);
  return {};
};

export const ChatPageProvider = ({ children }: React.PropsWithChildren) => {
  const value = useChatPage();
  return (
    <ChatPageContext.Provider value={value}>
      {children}
    </ChatPageContext.Provider>
  );
};

export const useChatPageContext = () => {
  if (!ChatPageContext) {
    throw new Error("onboarding context doesn't existed");
  }
  return useContext(ChatPageContext);
};
