import { Chat, Message, User } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatInitialStateTypes {
  chats: Chat[];
  selectedChat: Chat | null;
  assignee: User;
}

const initialState: ChatInitialStateTypes = {
  chats: [
    {
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
    },
    {
      chatId: "chat_002",
      user: {
        id: "user_456",
        name: "Emily Johnson",
        avatar:
          "https://img.freepik.com/free-vector/woman-floral-costume-illustration_1308-173499.jpg?ga=GA1.1.1941897121.1746682297&semt=ais_hybrid&w=740",
        isLoggedIn: true,
      },
      lastMessage: {
        id: "msg_0027",
        content:
          "Your return has been processed. You should receive your refund within 3-5 business days.",
        timestamp: "2025-05-20T10:15:22.000Z",
        isRead: false,
        sender: "bot",
      },
      messages: [
        {
          id: "msg_0021",
          content: "I need to return an item",
          timestamp: "2025-05-20T10:10:10.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0022",
          content:
            "Hello Emily! I'd be happy to help with your return. Could you please provide your order number and which item you'd like to return?",
          timestamp: "2025-05-20T10:10:40.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0023",
          content: "Order #34567, I want to return the red dress I purchased",
          timestamp: "2025-05-20T10:11:30.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0024",
          content:
            "Thank you for that information. May I ask the reason for the return?",
          timestamp: "2025-05-20T10:12:00.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0025",
          content: "The size is too small",
          timestamp: "2025-05-20T10:12:45.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0026",
          content:
            "I understand. I've processed your return request. You'll receive a return shipping label by email within the next hour. Once we receive the item back, we'll process your refund.",
          timestamp: "2025-05-20T10:14:15.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0027",
          content:
            "Your return has been processed. You should receive your refund within 3-5 business days.",
          timestamp: "2025-05-20T10:15:22.000Z",
          sender: "bot",
          isRead: true,
        },
      ],
    },
    {
      chatId: "chat_003",
      user: {
        id: "user_478",
        name: null,
        avatar:
          "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?uid=R200997897&ga=GA1.1.1941897121.1746682297&semt=ais_hybrid&w=740",
        isLoggedIn: false,
      },
      lastMessage: {
        id: "msg_0039",
        content:
          "You're welcome! If you have any other questions or need further assistance, feel free to chat with us again. Have a great day!",
        timestamp: "2025-05-20T09:50:20.000Z",
        sender: "bot",
        isRead: true,
      },
      messages: [
        {
          id: "msg_0031",
          content: "How do I track my order?",
          timestamp: "2025-05-20T09:45:10.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0032",
          content:
            "Hello! I'd be happy to help you track your order. Could you please provide your order number?",
          timestamp: "2025-05-20T09:45:40.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0033",
          content: "My order number is #23456",
          timestamp: "2025-05-20T09:46:15.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0034",
          content:
            "Thank you for providing your order number. I can see that your order #23456 was shipped yesterday via FedEx. The tracking number is FX4830592761.",
          timestamp: "2025-05-20T09:47:00.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0035",
          content:
            "According to the tracking information, your package is currently in transit and is expected to be delivered on May 22nd. Would you like me to send you the tracking link?",
          timestamp: "2025-05-20T09:47:30.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0036",
          content: "Yes please, that would be helpful",
          timestamp: "2025-05-20T09:48:15.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0037",
          content:
            "I've sent the tracking link to the email address associated with your order. You should receive it shortly. Is there anything else you'd like to know about your order?",
          timestamp: "2025-05-20T09:49:00.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0038",
          content: "No that's all, thanks for your help!",
          timestamp: "2025-05-20T09:49:45.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0039",
          content:
            "You're welcome! If you have any other questions or need further assistance, feel free to chat with us again. Have a great day!",
          timestamp: "2025-05-20T09:50:20.000Z",
          sender: "bot",
          isRead: true,
        },
      ],
    },
    {
      chatId: "chat_004",
      user: {
        id: "user_458",
        name: "Jeremy Watts",
        avatar:
          "https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-175803.jpg?ga=GA1.1.1941897121.1746682297&semt=ais_hybrid&w=740",
        isLoggedIn: true,
      },
      lastMessage: {
        id: "msg_00410",
        content:
          "We've extended the return period for your order #12345 by 14 days.",
        timestamp: "2025-05-19T16:20:05.000Z",
        sender: "bot",
        isRead: true,
      },
      messages: [
        {
          id: "msg_0041",
          content:
            "I received my order #12345 but I'm not sure I'll be able to try the items within your return window. I'm traveling for work.",
          timestamp: "2025-05-19T16:05:10.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0042",
          content:
            "Hello! Thank you for reaching out about your order #12345. I understand your concern about the return window while you're traveling.",
          timestamp: "2025-05-19T16:06:30.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0043",
          content:
            "I'll be gone for 3 weeks and your return policy is only 14 days.",
          timestamp: "2025-05-19T16:08:15.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0044",
          content:
            "I completely understand. Since you're a valued customer, I'd be happy to make an exception. When do you expect to return from your trip?",
          timestamp: "2025-05-19T16:09:45.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0045",
          content: "I should be back by June 10th.",
          timestamp: "2025-05-19T16:11:20.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0046",
          content:
            "Thank you for that information. I've made a note in our system and extended your return period. You'll have until June 15th to decide if you'd like to keep or return any items from this order.",
          timestamp: "2025-05-19T16:13:50.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0047",
          content: "That's perfect, thank you so much for understanding!",
          timestamp: "2025-05-19T16:15:30.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_0048",
          content:
            "You're very welcome! Is there anything else I can help you with regarding your order today?",
          timestamp: "2025-05-19T16:17:20.000Z",
          sender: "bot",
          isRead: true,
        },
        {
          id: "msg_0049",
          content: "No, that's all I needed. Thank you!",
          timestamp: "2025-05-19T16:18:45.000Z",
          sender: "user",
          isRead: true,
        },
        {
          id: "msg_00410",
          content:
            "We've extended the return period for your order #12345 by 14 days.",
          timestamp: "2025-05-19T16:20:05.000Z",
          sender: "bot",
          isRead: true,
        },
      ],
    },
  ],
  selectedChat: {
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
  },
  assignee: {
    id: "user_183",
    name: "Owen Hart",
    avatar:
      "https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-173760.jpg?uid=R200997897&ga=GA1.1.1941897121.1746682297&semt=ais_hybrid&w=740",
    isLoggedIn: true,
    team: null,
  },
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setSelectedChat: (state, action) => {
      console.log("chat slice", action.payload);
      console.log("hello from slice");
      state.selectedChat = action.payload;
    },

    setMessageToChat: (
      state,
      action: PayloadAction<{ chatId: string; message: Message }>
    ) => {
      if (state.selectedChat) {
        state.selectedChat.messages.push(action.payload.message);
      }
      const chat = state.chats.find(
        (chatItem) => chatItem.chatId === action.payload.chatId
      );

      if (chat) {
        chat.lastMessage = action.payload.message;
      }
    },
  },
});

export const { setSelectedChat, setMessageToChat } = chatsSlice.actions;
export default chatsSlice.reducer;
