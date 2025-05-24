import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  openAISection: boolean;
  openChat: boolean;
}
const initialState: ToggleState = {
  openAISection: false,
  openChat: false,
};

const sectionToggleSlice = createSlice({
  name: "sectionToggler",
  initialState,
  reducers: {
    toggleAISection: (state) => {
      state.openAISection = !state.openAISection;
    },
    toggleChat: (state) => {
      state.openChat = !state.openChat;
    },
  },
});

export const { toggleAISection, toggleChat } = sectionToggleSlice.actions;

export default sectionToggleSlice.reducer;
