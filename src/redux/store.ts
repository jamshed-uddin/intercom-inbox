import { configureStore } from "@reduxjs/toolkit";
import sectionTogglerReducer from "../redux/features/sectionToggleSlice";
import chatReducer from "../redux/features/chatsSlice";
import messageInputReducer from "../redux/features/messageInputSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sectionToggler: sectionTogglerReducer,
      chats: chatReducer,
      messageInput: messageInputReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
