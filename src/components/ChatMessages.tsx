import { Chat } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";
import React, { Ref } from "react";

const ChatMessages = ({
  selectedChat,
  messagesEndRef,
}: {
  messagesEndRef: Ref<HTMLDivElement>;
  selectedChat: Chat;
}) => {
  return (
    <div>
      {selectedChat?.messages.map((message) => (
        <div
          key={message.id}
          className={clsx(
            "flex  w-full  mb-3",
            message.sender === "user" ? "justify-start" : "justify-end text-end"
          )}
        >
          <div className="flex items-end max-w-[80%] gap-2">
            {message.sender === "user" && (
              <div className="h-6  w-6  overflow-hidden shrink-0">
                <Image
                  width={30}
                  height={30}
                  src={selectedChat.user.avatar as string}
                  alt={selectedChat.user.name || "avatar"}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            )}

            <div
              className={clsx(
                " rounded-lg p-2 animate-fadeIn flex items-center gap-1 text-sm",
                message.sender === "user" ? "  bg-gray-200" : "  bg-indigo-100 "
              )}
            >
              <div className="chat-message">{message.content}</div>
            </div>
          </div>
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
