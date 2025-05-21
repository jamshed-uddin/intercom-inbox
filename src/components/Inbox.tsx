"use client";

import React, { ReactNode } from "react";
import ChatList from "./ChatList";
import AISection from "./AISection";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import clsx from "clsx";
import { toggleAISection } from "@/redux/features/sectionToggleSlice";

const Inbox = ({ children }: Readonly<{ children: ReactNode }>) => {
  const { openAISection, openChat } = useAppSelector(
    (state) => state.sectionToggler
  );
  const dispatch = useAppDispatch();

  const toggleAiSection = () => {
    dispatch(toggleAISection());
  };

  return (
    <div className="flex h-screen overflow-hidden  divide-x divide-black">
      {/* chat list */}
      <div className=" lg:w-1/5 w-full transition-all duration-500 z-50  absolute inset-0 lg:static shrink-0">
        <ChatList />
      </div>

      {/* messages inbox */}
      <div className=" flex-grow transition-all duration-500 absolute inset-0 lg:static ">
        {children}
      </div>

      {/* ai section */}
      <div
        className={clsx(
          "  transition-all duration-500 absolute inset-0 lg:static z-30 ",
          openAISection
            ? "translate-x-0 lg:w-1/3 w-full "
            : "translate-x-96 w-0 "
        )}
      >
        <AISection
          toggleSection={toggleAiSection}
          openAISection={openAISection}
        />
      </div>
    </div>
  );
};

export default Inbox;
