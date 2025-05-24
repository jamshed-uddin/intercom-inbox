// store/chatSlice.ts
import { AIMessage } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  customer: {
    input: string;
  };
  ai: {
    messages: AIMessage[];
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

    addAIMessage: (state, action: PayloadAction<AIMessage>) => {
      state.ai.messages.push(action.payload);
    },
  },
});

export const { setCustomerInput, setAIInput, addAIMessage } =
  messageInputSlice.actions;

export default messageInputSlice.reducer;
