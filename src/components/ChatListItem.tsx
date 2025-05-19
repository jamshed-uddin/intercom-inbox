"use client";

import Link from "next/link";
import React from "react";

const ChatListItem = ({ idx }: { idx: number }) => {
  return (
    <Link href={`/${idx}`} className="block">
      <h3 className="text-lg font-medium">hello {idx}</h3>
      <p className="">message {idx}</p>
    </Link>
  );
};

export default ChatListItem;
