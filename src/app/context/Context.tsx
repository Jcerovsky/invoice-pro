"use client";

import React, { createContext, ReactNode } from "react";
import { useObjectState } from "@/app/hooks/useObjectState";
import theme from "tailwindcss/defaultTheme";
import data from "../data/data.json";

interface Invoice {
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
  allInvoices: Invoice[];
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
  });

  return (
    <Context.Provider
      value={{ theme: state.theme, setState, allInvoices: state.allInvoices }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
