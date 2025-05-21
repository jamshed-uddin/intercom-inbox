"use client";
import React from "react";
import ChatListItem from "./ChatListItem";
import { useAppSelector } from "@/hooks/reduxHooks";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ChatList = () => {
  const { chats } = useAppSelector((state) => state.chats);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="shrink-0">
        <div className="border-b  border-gray-300">
          <h2 className="text-xl font-medium   pb-5  px-3  ">Your inbox</h2>
        </div>
        <div className="text-xs font-semibold flex justify-between mb-3 px-3 py-1">
          <button>
            4 Open <ChevronDownIcon className="w-3 h-3 inline" />
          </button>
          <button>
            Waiting longest <ChevronDownIcon className="w-3 h-3 inline " />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto ">
        <div className="space-y-4 px-3 py-1 ">
          {chats.map((item) => (
            <ChatListItem key={item.chatId} chat={item} />
          ))}
        </div>
      </div>
      <div className="shrink-0">footer</div>
    </div>
  );
};

export default ChatList;
