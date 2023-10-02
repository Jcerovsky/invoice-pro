"use client";

import React, { createContext, ReactNode } from "react";
import { useObjectState } from "@/app/hooks/useObjectState";

interface IContextProps {
  theme: string;
  setState: (newState: Partial<IContextProps>) => void;
}

export const Context = createContext<IContextProps | null>(null);

const getLocalStorageItem = (key: string, defaultValue: any) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  }
  return defaultValue;
};

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useObjectState<IContextProps>({
    theme: getLocalStorageItem("theme", "light"),
    setState: () => {},
  });

  return (
    <Context.Provider value={{ theme: state.theme, setState }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
