export type Message = {
  id: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  sender: "user" | "bot";
};

export interface Chat {
  chatId: string;
  user: {
    id: string;
    name: string | null;
    avatar: string | null;
    isLoggedIn: boolean;
  };
  lastMessage: Message;
  messages: Message[];
}
