"use client";

import React, { createContext, ReactNode, useEffect } from "react";
import { useObjectState } from "@/app/hooks/useObjectState";
import theme from "tailwindcss/defaultTheme";
import data from "../data/data.json";

export interface IInvoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    total: number;
  }>;
  total: number;
}

interface IContextProps {
  theme: string;
  allInvoices: IInvoice[];
  name: string;
  quantity: number | string;
  price: number | string;
  total: number;
  screenSize: string;
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
    theme: getLocalStorageItem("theme", "dark"),
    setState: () => {},
    allInvoices: data,
    name: "",
    quantity: 1,
    price: "",
    total: 0,
    screenSize: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const screen =
          window.innerWidth < 600
            ? "small"
            : window.innerWidth < 950
            ? "medium"
            : "large";
        setState({ screenSize: screen });
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      console.log("run");

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [state.screenSize]);

  return (
    <Context.Provider
      value={{
        theme: state.theme,
        setState,
        allInvoices: state.allInvoices,
        name: state.name,
        quantity: state.quantity,
        price: state.price,
        total: state.total,
        screenSize: state.screenSize,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
