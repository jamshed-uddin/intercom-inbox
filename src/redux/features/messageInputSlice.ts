// store/chatSlice.ts
import { Message } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  customer: {
    input: string;
  };
  ai: {
    messages: Message[];
    input: string;
  };
}

const initialState: ChatState = {
  customer: {
    input: "",
  },
  ai: {
    messages: [],
    input: "",
  },
};

const messageInputSlice = createSlice({
  name: "messageInput",
  initialState,
  reducers: {
    setCustomerInput: (state, action: PayloadAction<string>) => {
      state.customer.input = action.payload;
    },
    setAIInput: (state, action: PayloadAction<string>) => {
      state.ai.input = action.payload;
    },

    addAIMessage: (state, action: PayloadAction<Message>) => {
      state.ai.messages.push(action.payload);
    },
    transferToAIInput: (state, action: PayloadAction<string>) => {
      state.ai.input = action.payload;
    },
    transferToCustomerInput: (state, action: PayloadAction<string>) => {
      state.customer.input = action.payload;
    },
  },
});

export const {
  setCustomerInput,
  setAIInput,
  addAIMessage,
  transferToAIInput,
  transferToCustomerInput,
} = messageInputSlice.actions;

export default messageInputSlice.reducer;
