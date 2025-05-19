import { createSlice } from "@reduxjs/toolkit";

interface Chat {
  name: string;
}
interface ChatInitialStateTypes {
  chats: Chat[];
  selectedChat: Chat | object;
}

const initialState: ChatInitialStateTypes = {
  chats: [],
  selectedChat: {},
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setSectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

export const { setSectedChat } = chatsSlice.actions;
export default chatsSlice.reducer;
