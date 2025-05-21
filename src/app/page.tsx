"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { toggleAISection } from "@/redux/features/sectionToggleSlice";
import { WindowIcon } from "@heroicons/react/24/outline";
import {
  EllipsisHorizontalIcon,
  InboxArrowDownIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const { openAISection, openChat } = useAppSelector(
    (state) => state.sectionToggler
  );

  const { selectedChat } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();
  console.log(openAISection);
  const toggleAiSection = () => {
    dispatch(toggleAISection());
  };

  if (!selectedChat) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div>Select a chat</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between px-3  pt-1 pb-4 border-b border-gray-300 shrink-0">
        <h3>Name</h3>
        <div className="text-sm flex items-center gap-4">
          <button className="bg-gray-100 p-1 rounded">
            <EllipsisHorizontalIcon className="w-4 h-4 " />
          </button>
          <button className="flex items-center cursor-pointer relative bg-gray-100 p-1 rounded">
            {" "}
            <MoonIcon className="w-4 h-4 inline" />
            <span className="text-xs font-medium absolute -top-0.5 right-1">
              z
            </span>
          </button>
          <button className="flex items-center cursor-pointer bg-black text-white rounded-md gap-1 px-2 py-1 font-medium">
            <InboxArrowDownIcon className="w-4 h-4 inline" /> Close
          </button>

          {!openAISection && (
            <button onClick={toggleAiSection} className="cursor-pointer">
              <WindowIcon className="w-4 h-4 rotate-90 rotate-x-[3.142rad] " />
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 w-full flex justify-center overflow-y-auto">
        <div>
          {selectedChat.messages.map((message) => (
            <div key={message.id}> {message.content}</div>
          ))}
        </div>
      </div>
      <div className="shrink-0 w-full flex justify-center">
        <div>input field</div>
      </div>
    </div>
  );
}
