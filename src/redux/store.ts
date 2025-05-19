import { configureStore } from "@reduxjs/toolkit";
import sectionTogglerReducer from "../redux/features/sectionToggleSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sectionToggler: sectionTogglerReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
