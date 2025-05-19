import React from "react";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <div>
      ChatList
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((item, idx) => (
          <ChatListItem key={idx} idx={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
