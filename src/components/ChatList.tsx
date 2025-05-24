"use client";
import React from "react";
import ChatListItem from "./ChatListItem";
import { useAppSelector } from "@/hooks/reduxHooks";
import {
  ChevronDownIcon,
  ListBulletIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";

const ChatList = () => {
  const { chats } = useAppSelector((state) => state.chats);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* header */}
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

      {/* chat list */}
      <div className="flex-1 overflow-y-auto ">
        <div className="space-y-4 px-3 py-1 ">
          {chats.map((item) => (
            <ChatListItem key={item.chatId} chat={item} />
          ))}
        </div>
      </div>

      <div className="shrink-0 px-4 pb-4">
        <div className="flex px-2  shadow-lg shadow-gray-300 py-1 gap-2 divide-x divide-gray-400 w-fit rounded-xl">
          <span className="pr-2">
            <ViewColumnsIcon className="w-4 h-4 cursor-pointer" />
          </span>
          <span>
            <ListBulletIcon className="w-4 h-4 cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
