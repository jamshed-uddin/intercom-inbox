"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardDocumentCheckIcon,
  PlusIcon,
  TicketIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const accordion = [
  {
    title: "Links",
    content: <LinkContent />,
  },
  {
    title: "User data",
    content: null,
  },
  {
    title: "Conversation attributes",
    content: null,
  },
  {
    title: "Company details",
    content: null,
  },
  {
    title: "Salesforce",
    content: null,
  },
  {
    title: "Stripe",
    content: null,
  },
  {
    title: "Jira for tickets",
    content: null,
  },
];

function LinkContent() {
  return (
    <div className="space-y-4 mb-3">
      <div className="flex items-center gap-2">
        <p>
          <TicketIcon className="w-4 h-4" />
        </p>
        <p className=" flex-1  font-medium">Tracker ticket</p>
        <p className="bg-gray-200 p-1 rounded-lg">
          <PlusIcon className="w-4 h-4" />
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p>
          <ClipboardDocumentCheckIcon className="w-4 h-4" />
        </p>
        <p className=" flex-1  font-medium">Back-office ticket</p>
        <p className="bg-gray-200 p-1 rounded-lg">
          <PlusIcon className="w-4 h-4" />
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p>
          <ArrowUpRightIcon className="w-4 h-4" />
        </p>
        <p className=" flex-1  font-medium">Side conversation</p>
        <p className="bg-gray-200 p-1 rounded-lg">
          <PlusIcon className="w-4 h-4" />
        </p>
      </div>
    </div>
  );
}

const Details = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { assignee } = useAppSelector((state) => state.chats);
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="divide-y divide-gray-300">
        <div className="px-4 py-5 space-y-3">
          <div className="flex ">
            <h3 className="w-1/2">Assignee</h3>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full overflow-hidden">
                <Image
                  width={30}
                  height={30}
                  src={assignee.avatar as string}
                  alt={assignee.name || "avatar"}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <h3 className="font-medium">{assignee.name}</h3>
            </div>
          </div>
          <div className="flex ">
            <h3 className="w-1/2">Team</h3>
            <h3 className="flex items-center gap-1 font-medium ">
              <UsersIcon className="w-4 h-4 inline" />
              {assignee.team || "Unassigned"}
            </h3>
          </div>
        </div>

        <div className="mt-1  ">
          {accordion.map((item, index) => (
            <div key={item.title} className=" border-b border-gray-300">
              <div
                onClick={() => toggle(index)}
                className="flex justify-between cursor-pointer px-4 py-3"
              >
                <button className="font-medium">{item.title}</button>

                <span className={"transition-all duration-300"}>
                  {" "}
                  {openIndex === index ? (
                    <ChevronDownIcon className="w-4 h-4" />
                  ) : (
                    <ChevronUpIcon className="w-4 h-4" />
                  )}
                </span>
              </div>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 px-4 ",
                  openIndex === index ? "h-max opacity-100 " : "h-0 opacity-0"
                )}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
