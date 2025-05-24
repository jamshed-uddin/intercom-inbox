"use client";

import React, { ReactNode } from "react";
import ChatList from "./ChatList";
import AISection from "./AISection";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import clsx from "clsx";
import { toggleAISection } from "@/redux/features/sectionToggleSlice";

const Inbox = ({ children }: Readonly<{ children: ReactNode }>) => {
  const { selectedChat } = useAppSelector((state) => state.chats);
  const { openAISection } = useAppSelector((state) => state.sectionToggler);

  const dispatch = useAppDispatch();

  const toggleAiSection = () => {
    dispatch(toggleAISection());
  };

  console.log("ai section", openAISection);

  return (
    <div className="lg:flex h-full">
      {/* chat list */}
      <div
        className={clsx(
          "lg:w-[22%] w-full transition-all duration-500   absolute inset-0 lg:static shrink-0",
          selectedChat
            ? "-translate-full z-0  lg:translate-0"
            : "translate-0 z-50"
        )}
      >
        <ChatList />
      </div>

      {/* messages inbox */}
      <div className=" flex-grow transition-all duration-500 absolute inset-0 lg:static z-40">
        {children}
      </div>

      {/* ai section */}
      <div
        className={clsx(
          "  transition-all duration-500 origin-left absolute inset-0 lg:static  shrink-0",
          openAISection && selectedChat
            ? "translate-x-0 lg:w-[30%] w-full z-50"
            : "translate-x-full w-0 z-0"
        )}
      >
        <AISection toggleSection={toggleAiSection} />
      </div>
    </div>
  );
};

export default Inbox;
