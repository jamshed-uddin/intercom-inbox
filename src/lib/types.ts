export type Message = {
  id: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  sender: string;
};

export type AIMessage = {
  id: string;
  content: string;
  timeStamp: string;
  sender: string;
  resources?: string[];
};

export type User = {
  id: string;
  name: string | null;
  avatar: string | null;
  isLoggedIn: boolean;
  team?: null | string;
};

export interface Chat {
  chatId: string;
  user: User;
  lastMessage: Message;
  messages: Message[];
}
