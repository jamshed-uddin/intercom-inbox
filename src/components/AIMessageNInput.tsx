import React, { ChangeEvent, useEffect, useRef } from "react";
import {
  ArrowUpIcon,
  BanknotesIcon,
  ChevronDownIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  addAIMessage,
  setAIInput,
  setCustomerInput,
} from "@/redux/features/messageInputSlice";
import clsx from "clsx";
import Image from "next/image";

const AIMessageNInput = () => {
  const { ai } = useAppSelector((state) => state.messageInput);
  const { assignee } = useAppSelector((state) => state.chats);
  const aiSecLastMsgRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleAIInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAIInput(e.target.value));
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    aiSecLastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ai.messages]);

  useEffect(() => {
    console.log("Effect runs, inputRef.current:", inputRef.current);
    if (ai.input.trim() && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [ai.input]);

  const sendMessage = (message: string) => {
    const newMessage = {
      id: `msg_${Math.ceil(Math.random() * 1000)}`,
      content: message,
      timeStamp: new Date().toISOString(),
      sender: "user",
    };

    dispatch(addAIMessage(newMessage));
    dispatch(setAIInput(""));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop && (e.key === "Enter" || e.keyCode === 13)) {
      sendMessage(ai.input);
    }
  };

  const componseMessage = (message: string) => {
    dispatch(setCustomerInput(message));
  };

  const sendSuggestedMessage = (message: string) => {
    sendMessage(message);

    const dummyAIReply = {
      id: `msg_${Math.ceil(Math.random() * 1000)}`,
      content:
        "To request a refund, please visit your order history, select the item, and click 'Request Refund.' Follow the on-screen instructions to complete the process. Refunds are usually processed within 5–7 business days.",
      timeStamp: new Date().toISOString(),
      sender: "bot",
      resources: [
        "Refund policy",
        "Request refund",
        "Refund for an unwanted gift",
      ],
    };
    setTimeout(() => {
      dispatch(addAIMessage(dummyAIReply));
    }, 600);
  };

  return (
    <div
      style={{
        backgroundImage: `
              linear-gradient(to top, rgba(255, 255, 255, 0), white 40%),
              linear-gradient(to left, #fbcfe8, #c7d2fe)
            `,
      }}
      className="h-full flex flex-col flex-1  overflow-hidden "
    >
      <div className="flex-1 overflow-y-auto px-2  ">
        {ai.messages.length > 0 ? (
          <div className=" space-y-4 pb-3 pt-5 ">
            {ai.messages.map((message) => (
              <div key={message.id} className="flex gap-2 w-full">
                <div className="h-6  w-6  overflow-hidden shrink-0">
                  <Image
                    width={30}
                    height={30}
                    src={assignee.avatar as string}
                    alt={assignee.name || "avatar"}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">
                    {message.sender === "bot" ? "Fin" : "You"}
                  </h3>
                  <div
                    className={clsx(
                      "text-sm ",
                      message.sender === "bot"
                        ? "bg-gradient-to-br from-indigo-300 to-pink-200 p-2 rounded-lg"
                        : ""
                    )}
                  >
                    {message.content}
                    {message.sender === "bot" && (
                      <div className="flex items-center bg-white px-2 py-1.5 rounded-lg mt-2 divide-x divide-gray-400">
                        <button
                          onClick={() => componseMessage(message.content)}
                          className=" w-full flex items-center gap-1 text-sm font-medium justify-center cursor-pointer"
                        >
                          <PencilSquareIcon className="w-4 h-4" /> Add to
                          composer
                        </button>
                        <span className="pl-1">
                          <ChevronDownIcon className="w-4 h-4" />
                        </span>
                      </div>
                    )}
                  </div>
                  {message.sender === "bot" && message.resources?.length && (
                    <div>
                      <h3>{message.resources.length} relevant sources found</h3>
                      <div>
                        {message.resources.map((source, idx) => (
                          <li key={idx}>{source}</li>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div ref={aiSecLastMsgRef} />
          </div>
        ) : (
          // default ask ai text and suggested message
          <div className="flex h-full justify-center items-center text-center relative">
            <div>
              <h3 className="text-sm font-medium">Hi, I am Fin AI Copilot</h3>
              <p className="text-xs text-gray-600">
                Ask me about anything about this conversation
              </p>
            </div>

            <div
              onClick={() => sendSuggestedMessage("How do I get a refund?")}
              className=" absolute left-0 bottom-0 cursor-pointer flex   items-end pb-3   ml-1"
            >
              <div className="flex items-center bg-white  rounded-lg py-1 px-2 animate-fadeIn  text-sm gap-1">
                <div className="font-medium ">Suggested</div>
                <BanknotesIcon className="w-4 h-4 " />
                <div>How do I get a refund?</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* input box */}
      <div className="shrink-0 px-2 pb-4  ">
        <div className="relative bg-white rounded-lg">
          <input
            ref={inputRef}
            type="text"
            className=" w-full shadow-md rounded-lg py-2 px-1 focus:outline-0 focus:ring-2 focus:ring-indigo-600 transition-all duration-500"
            value={ai.input}
            onChange={handleAIInputChange}
          />
          <button
            onClick={() => sendMessage(ai.input)}
            onKeyDown={handleKeyDown}
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

export default AIMessageNInput;

{
  /* {ai.messages.length < 1 && (
             
            )} */
}
