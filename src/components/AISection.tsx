"use client";

import { WindowIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setAIInput } from "@/redux/features/messageInputSlice";

interface AISectionProps {
  toggleSection: () => void;
}

const tabs: string[] = ["AI Copilot", "Details"];

const AISection = ({ toggleSection }: AISectionProps) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const { ai } = useAppSelector((state) => state.messageInput);
  const dispatch = useAppDispatch();

  const handleAIInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAIInput(e.target.value));
  };

  return (
    <div
      className="h-screen flex flex-col "
      style={{
        backgroundImage: `
              linear-gradient(to top, rgba(255, 255, 255, 0), white 40%),
              linear-gradient(to left, #fbcfe8, #c7d2fe)
            `,
      }}
    >
      {/* header -- tabs */}
      <div className="shrink-0 flex justify-between items-start pt-2  border-b  border-gray-300 pr-3">
        <div className="flex gap-4 px-3 text-sm">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              initial={false}
              animate={{
                color: tab === selectedTab ? "#60a5fa" : "#000",
                opacity: tab === selectedTab ? "1" : "0.6",
              }}
              onClick={() => setSelectedTab(tab)}
              className={clsx("font-medium relative pb-5 cursor-pointer")}
            >
              {tab}

              {tab === selectedTab ? (
                <motion.div
                  layoutId="underline"
                  id="underline"
                  className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-blue-400"
                ></motion.div>
              ) : null}
            </motion.button>
          ))}
        </div>
        <button onClick={toggleSection} className="cursor-pointer">
          <WindowIcon className="w-4 h-4 rotate-90 rotate-x-[3.142rad] " />
        </button>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto px-2 h-full ">
        {ai.messages.length > 0 ? (
          <div>ai messages</div>
        ) : (
          <div className="flex h-full justify-center items-center text-center">
            <div>
              <h3 className="text-sm font-medium">Hi, I am Fin AI Copilot</h3>
              <p className="text-xs text-gray-600">
                Ask me about anything about this conversation
              </p>
            </div>
          </div>
        )}
      </div>

      {/* input box */}
      <div className="shrink-0 px-2 pb-4  ">
        <div className="relative bg-white rounded-lg">
          <input
            type="text"
            className=" w-full shadow-md rounded-lg py-2 px-1 focus:outline-0 focus:ring-2 focus:ring-indigo-600 transition-all duration-500"
            value={ai.input}
            onChange={handleAIInputChange}
          />
          <button
            className={clsx(
              " rounded-lg px-1.5  absolute right-0.5 top-1 bottom-1 cursor-pointer transition-all duration-500",
              ai.input ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            <ArrowUpIcon className="w-4 h-4 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AISection;
