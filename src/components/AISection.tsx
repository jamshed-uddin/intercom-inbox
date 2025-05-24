"use client";

import { WindowIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useState } from "react";
import { motion } from "motion/react";
import AIMessageNInput from "./AIMessageNInput";
import Details from "./Details";

interface AISectionProps {
  toggleSection: () => void;
}

const tabs: string[] = ["AI Copilot", "Details"];

const AISection = ({ toggleSection }: AISectionProps) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="h-screen flex flex-col ">
      {/* header -- tabs */}
      <div className="shrink-0 flex justify-between items-start pt-2  border-b  border-gray-300 pr-4 bg-white">
        <div className="flex gap-4 px-4 text-sm">
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

      {selectedTab === "AI Copilot" ? <AIMessageNInput /> : <Details />}
    </div>
  );
};

export default AISection;
