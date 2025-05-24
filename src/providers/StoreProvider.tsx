"use client";

import SetInitialSelectedChat from "@/components/SetInitialSelectedChat";
import { AppStore, makeStore } from "@/redux/store";
import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <SetInitialSelectedChat />
      {children}
    </Provider>
  );
};

export default StoreProvider;
