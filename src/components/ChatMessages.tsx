import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import timeDiff from "@/lib/timeDiff";
import { Chat } from "@/lib/types";
import { setAIInput } from "@/redux/features/messageInputSlice";
import { toggleAISection } from "@/redux/features/sectionToggleSlice";
import clsx from "clsx";
import Image from "next/image";
import React, { Ref, RefObject, useEffect, useState } from "react";

const ChatMessages = ({
  messageContainerRef,
  selectedChat,
  messagesEndRef,
}: {
  messageContainerRef: RefObject<HTMLDivElement | null>;
  messagesEndRef: Ref<HTMLDivElement>;
  selectedChat: Chat;
}) => {
  const dispatch = useAppDispatch();
  const [btnPosition, setBtnPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [selectedText, setSelectedText] = useState("");

  const assignee = useAppSelector((state) => state.chats.assignee);

  useEffect(() => {
    const getSelectedText = () => {
      const selection = window.getSelection();
      const container = messageContainerRef?.current;

      //   return if there is no valid selected
      if (
        !selection ||
        selection.rangeCount === 0 ||
        selection.isCollapsed ||
        !container
      ) {
        return;
      }

      const text = selection?.toString().trim();
      // return if selected text is an whitespace
      if (!text) {
        return;
      }

      const range = selection?.getRangeAt(0);
      const commonAncestor = range?.commonAncestorContainer;
      const rect = range?.getBoundingClientRect();
      const containerRect = container?.getBoundingClientRect();
      const dataAttribute =
        commonAncestor.parentElement?.getAttribute("data-element");

      if (dataAttribute === "message") {
        setSelectedText(text);
        setBtnPosition({
          top: rect.top + container.scrollTop - (containerRect?.top + 32),
          left: rect.left - containerRect?.left,
        });
      }
    };

    const removeButton = () => {
      setTimeout(() => {
        setBtnPosition(null);
        setSelectedText("");
      }, 300);
    };

    window.addEventListener("mouseup", getSelectedText);
    window.addEventListener("mousedown", removeButton);

    return () => {
      window.removeEventListener("mouseup", getSelectedText);
      window.removeEventListener("mousedown", removeButton);
    };
  }, [messageContainerRef]);

  // passing selected text to co pilot input box
  const askAIHandler = () => {
    const isDesktop = window.innerWidth >= 768;
    dispatch(setAIInput(selectedText));
    if (!isDesktop) {
      dispatch(toggleAISection());
    }

    setTimeout(() => {
      setBtnPosition(null);
      setSelectedText("");
    }, 300);
    console.log("action button clicked");
  };

  return (
    <div>
      {selectedChat?.messages.map((message) => (
        <div
          key={message.id}
          className={clsx(
            "flex  w-full  mb-3",
            message.sender === "user" ? "justify-start" : "justify-end "
          )}
        >
          <div className="flex items-end max-w-[80%] gap-2">
            {/* sender avatar */}
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
            {/* message content */}
            <div
              className={clsx(
                " rounded-lg p-2 animate-fadeIn  gap-1 text-sm ",
                message.sender === "user" ? "  bg-gray-200" : "  bg-indigo-100 "
              )}
            >
              <div data-element={message.sender === "user" ? "message" : ""}>
                {message.content}
              </div>
              <div className="text-[0.65rem] text-end mt-0.5">
                {`${message.isRead && "Seen ."}  ${timeDiff(
                  message.timestamp
                )}`}
              </div>
              {/* floating button on selected text */}
              {selectedText ? (
                <div
                  onMouseDown={askAIHandler}
                  className={`bg-white text-black font-semibold  text-sm shadow z-50 px-2 py-1 rounded-lg cursor-pointer text-nowrap`}
                  style={{
                    position: "absolute",
                    top: btnPosition?.top,
                    left: btnPosition?.left,
                  }}
                >
                  Ask Fin Copilot
                </div>
              ) : null}
            </div>

            {/* assignee avatar */}
            {message.sender === "bot" && (
              <div className="h-6  w-6  overflow-hidden shrink-0">
                <Image
                  width={30}
                  height={30}
                  src={assignee.avatar as string}
                  alt={assignee.name || "avatar"}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
