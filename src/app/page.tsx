"use client";
import ChatMessages from "@/components/ChatMessages";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setMessageToChat, setSelectedChat } from "@/redux/features/chatsSlice";
import { setCustomerInput } from "@/redux/features/messageInputSlice";
import { toggleAISection } from "@/redux/features/sectionToggleSlice";
import { WindowIcon } from "@heroicons/react/24/outline";
import {
  BoltIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  InboxArrowDownIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ChangeEvent, useEffect, useRef } from "react";

export default function Home() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { customer } = useAppSelector((state) => state.messageInput);

  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  const { openAISection } = useAppSelector((state) => state.sectionToggler);

  const { selectedChat } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // for giving the message textarea a certain height
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [customer.input]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat?.messages]);

  const toggleAiSection = () => {
    dispatch(toggleAISection());
  };

  const handleSetMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setCustomerInput(e.target.value));
  };

  const sendMessage = () => {
    const newMessage = {
      chatId: selectedChat?.chatId as string,
      message: {
        id: `msg_${Math.ceil(Math.random() * 1000)}`,
        content: customer.input,
        timestamp: new Date().toISOString(),
        isRead: true,
        sender: "bot",
      },
    };

    dispatch(setMessageToChat(newMessage));
    dispatch(setCustomerInput(""));
  };

  if (!selectedChat) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div>Select a chat</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* header */}
      <div className="flex justify-between px-3  pt-1 pb-4 border-b border-gray-300 shrink-0">
        <h3 className="text-lg font-medium">
          {selectedChat.user.name || selectedChat.user.id}
        </h3>
        <div className="text-sm flex items-center gap-4">
          <button className="bg-gray-100 p-1 rounded cursor-pointer">
            <EllipsisHorizontalIcon className="w-4 h-4 " />
          </button>
          <button className="flex items-center cursor-pointer relative bg-gray-100 p-1 rounded">
            {" "}
            <MoonIcon className="w-4 h-4 inline" />
            <span className="text-xs font-medium absolute -top-0.5 right-1">
              z
            </span>
          </button>
          <button
            onClick={() => dispatch(setSelectedChat(null))}
            className="flex items-center cursor-pointer bg-black text-white rounded-md gap-1 px-2 py-1 font-medium"
          >
            <InboxArrowDownIcon className="w-4 h-4 inline" /> Close
          </button>

          {!openAISection && (
            <button onClick={toggleAiSection} className="cursor-pointer">
              <WindowIcon className="w-4 h-4 rotate-90 rotate-x-[3.142rad] " />
            </button>
          )}
        </div>
      </div>

      {/* messages */}
      <div
        ref={messageContainerRef}
        id="message-container"
        className="flex-1 w-full max-w-[43rem] mx-auto flex justify-center overflow-y-auto px-3 py-6 relative"
      >
        <ChatMessages
          selectedChat={selectedChat}
          messagesEndRef={messagesEndRef}
          messageContainerRef={messageContainerRef}
        />
      </div>

      {/* message input box */}
      <div className="shrink-0 w-full max-w-[43rem] mx-auto flex justify-center px-2 pb-2">
        <div className="my-2 shadow-md rounded-lg px-2 py-1 w-full space-y-2 ">
          <div className="flex items-center gap-1 text-sm font-medium">
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" /> Chat
            <ChevronDownIcon className="w-4 h-4" />
          </div>

          {/* input box */}
          <div className="flex-grow flex items-end ">
            <textarea
              ref={textAreaRef}
              className={`input  p-1  w-full max-h-60 overflow-y-auto focus:outline-0 focus:border-0 resize-none `}
              rows={1}
              placeholder="Message"
              onChange={handleSetMessage}
              value={customer.input}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-1.5">
              <BoltIcon className="w-4 h-4" />
              <BookmarkIcon className="w-4 h-4" />
              <FaceSmileIcon className="w-4 h-4" />
            </div>

            {/* send button */}
            <div
              className={clsx(
                "flex items-center  rounded-lg px-2 py-1 transition-all duration-500",
                customer.input ? "bg-black text-white" : "bg-white text-black"
              )}
            >
              <button
                onClick={sendMessage}
                className="text-sm border-r border-gray-300 pr-1.5 font-medium cursor-pointer"
              >
                Send
              </button>
              <span className="pl-1">
                {" "}
                <ChevronDownIcon className="w-4 h-4 " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
