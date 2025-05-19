"use client";

import React, { ReactNode } from "react";
import ChatList from "./ChatList";
import AISection from "./AISection";

const Inbox = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-amber-200 lg:w-1/5">
        <ChatList />
      </div>
      <div className="bg-green-300 flex-grow  "> {children}</div>
      <div className="bg-violet-400 lg:w-1/3 -translate-x-10">
        <AISection />
      </div>
    </div>
  );
};

export default Inbox;
