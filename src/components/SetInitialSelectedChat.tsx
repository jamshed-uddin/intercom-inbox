"use client";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setSelectedChat } from "@/redux/features/chatsSlice";
import { toggleAISection } from "@/redux/features/sectionToggleSlice";
import { useEffect } from "react";
const SetInitialSelectedChat = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        dispatch(
          setSelectedChat({
            chatId: "chat_001",
            user: {
              id: "user_123",
              name: "John Smith",
              avatar:
                "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?ga=GA1.1.1941897121.1746682297&semt=ais_hybrid&w=740",
              isLoggedIn: true,
            },
            lastMessage: {
              id: "msg_0017",
              content: "Thanks for resolving my issue with the delivery!",
              timestamp: "2025-05-20T11:30:45.000Z",
              isRead: true,
              sender: "user",
            },
            messages: [
              {
                id: "msg_0011",
                content: "Hi, I have a question about my delivery",
                timestamp: "2025-05-20T11:25:10.000Z",
                sender: "user",
                isRead: true,
              },
              {
                id: "msg_0012",
                content:
                  "Hello John! I'd be happy to help with your delivery question. Could you please provide your order number?",
                timestamp: "2025-05-20T11:25:30.000Z",
                sender: "bot",
                isRead: true,
              },
              {
                id: "msg_0013",
                content: "It's order #87654",
                timestamp: "2025-05-20T11:26:15.000Z",
                sender: "user",
                isRead: true,
              },
              {
                id: "msg_0014",
                content:
                  "Thank you. I can see your order was delivered yesterday at 2:15 PM. Was there a problem with the delivery?",
                timestamp: "2025-05-20T11:27:00.000Z",
                sender: "bot",
                isRead: true,
              },
              {
                id: "msg_0015",
                content:
                  "I was concerned it might be lost, but I just found it. My neighbor had accepted it for me.",
                timestamp: "2025-05-20T11:29:45.000Z",
                sender: "user",
                isRead: true,
              },
              {
                id: "msg_0016",
                content:
                  "I'm glad to hear you located your package! Is there anything else I can help you with today?",
                timestamp: "2025-05-20T11:30:15.000Z",
                sender: "bot",
                isRead: true,
              },
              {
                id: "msg_0017",
                content: "Thanks for resolving my issue with the delivery!",
                timestamp: "2025-05-20T11:30:45.000Z",
                sender: "user",
                isRead: true,
              },
            ],
          })
        );

        dispatch(toggleAISection());
      }
    };

    // Initial check on mount
    handleResize();

    // Add listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return null;
};

export default SetInitialSelectedChat;
