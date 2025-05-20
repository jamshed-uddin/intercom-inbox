"use client";
import React from "react";
import ChatListItem from "./ChatListItem";
import { useAppSelector } from "@/hooks/reduxHooks";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ChatList = () => {
  const { chats } = useAppSelector((state) => state.chats);

  return (
    <div className="px-3 py-1">
      <h2 className="text-xl font-medium mb-5">Your inbox</h2>
      <div className="text-xs font-semibold flex justify-between mb-3">
        <button>
          4 Open <ChevronDownIcon className="w-3 h-3 inline" />
        </button>
        <button>
          Waiting longest <ChevronDownIcon className="w-3 h-3 inline " />
        </button>
      </div>
      <div className="space-y-3">
        {chats.map((item) => (
          <ChatListItem key={item.chatId} chat={item} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
