export type message = {
  id: string;
  content: string;
  timestamp: string; // ISO 8601 format
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
  lastMessage: message;
  messages: message[];
}
