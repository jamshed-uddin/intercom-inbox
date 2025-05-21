"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { Chat } from "@/lib/types";
import { setSectedChat } from "@/redux/features/chatsSlice";
import Image from "next/image";
import React from "react";

const ChatListItem = ({ chat }: { chat: Chat }) => {
  const dispatch = useAppDispatch();

  const addChatToSelected = () => {
    dispatch(setSectedChat(chat));
  };

  return (
    <div className="cursor-pointer flex gap-3" onClick={addChatToSelected}>
      <div className="h-6  w-6  overflow-hidden shrink-0">
        <Image
          width={30}
          height={30}
          src={chat.user.avatar as string}
          alt={chat.user.name || "avatar"}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="  leading-3">{chat?.user?.name || chat?.user?.id}</h3>
        <p className="text-sm">{`${chat?.lastMessage?.content.slice(
          0,
          20
        )}...`}</p>
      </div>
    </div>
  );
};

export default ChatListItem;
