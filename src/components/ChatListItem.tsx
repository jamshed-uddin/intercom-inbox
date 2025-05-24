"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { Chat } from "@/lib/types";
import { setSelectedChat } from "@/redux/features/chatsSlice";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

import { motion } from "motion/react";
import timeDiff from "@/lib/timeDiff";

const ChatListItem = ({ chat }: { chat: Chat }) => {
  const dispatch = useAppDispatch();
  const { selectedChat } = useAppSelector((state) => state.chats);

  const addChatToSelected = () => {
    dispatch(setSelectedChat(chat));
  };

  return (
    <div
      className={clsx("cursor-pointer  px-1 py-2 rounded-lg relative  ")}
      onClick={addChatToSelected}
    >
      {selectedChat?.chatId === chat.chatId ? (
        <motion.div
          layoutId="background"
          className="absolute inset-0 bg-indigo-100 rounded-lg z-0"
        />
      ) : null}
      <div className="flex gap-3 relative z-10">
        <div className="h-6  w-6  overflow-hidden shrink-0">
          <Image
            width={30}
            height={30}
            src={chat.user.avatar as string}
            alt={chat.user.name || "avatar"}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="space-y-1 w-full">
          <h3 className="  leading-3">{chat?.user?.name || chat?.user?.id}</h3>
          <p className="flex justify-between items-end w-full">
            <span className="text-sm">
              {chat?.lastMessage?.content.length > 20
                ? `${chat.lastMessage.content.slice(0, 20)}...`
                : chat?.lastMessage?.content}
            </span>

            <span className="text-[0.65rem]">
              {timeDiff(chat.lastMessage.timestamp)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
