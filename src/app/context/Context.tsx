"use client";

import React, { createContext, ReactNode, useEffect } from "react";
import { useObjectState } from "@/app/hooks/useObjectState";
import theme from "tailwindcss/defaultTheme";
import { set } from "zod";
// import data from "../data/data.json";

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
    quantity: string | number;
    price: string | number;
    total: number;
  }>;
  total: number;
}

interface IContextProps {
  theme: string;
  allInvoices: IInvoice[];
  screenSize: string;
  isInvoiceModalOpen: boolean;
  isEditModalOpen: boolean;
  checkboxState: { paid: boolean; draft: boolean; pending: boolean };
  errorMsg: string;
  setState: (newState: Partial<IContextProps>) => void;
}

export const Context = createContext<IContextProps | null>(null);

const getLocalStorageItem = (key: string) => {
  if (typeof window !== "undefined") {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem("theme", prefersDarkMode ? "dark" : "light");
      return prefersDarkMode ? "dark" : "light";
    }
    return item && JSON.parse(item);
  }
};

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useObjectState<IContextProps>({
    theme: getLocalStorageItem("theme"),
    setState: () => {},
    allInvoices: [],
    screenSize: "",
    isInvoiceModalOpen: false,
    isEditModalOpen: false,
    errorMsg: "",
    checkboxState: { paid: false, draft: false, pending: false },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const screen =
          window.innerWidth < 400
            ? "xs"
            : window.innerWidth < 600
            ? "small"
            : window.innerWidth < 720
            ? "medium"
            : "large";
        setState({ screenSize: screen });
      };
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [state.screenSize]);

  useEffect(() => {
    fetch("/api/invoices", { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Server response was not ok.");
        }
      })
      .then((data) => {
        console.log("data", data);
        setState({ allInvoices: data });
        console.log("data after being set", data);
      })
      .catch((error) => {
        console.log("There was a problem!", error);
      });
  }, [state.theme]);

  return (
    <Context.Provider
      value={{
        theme: state.theme,
        setState,
        allInvoices: state.allInvoices,
        screenSize: state.screenSize,
        checkboxState: state.checkboxState,
        isInvoiceModalOpen: state.isInvoiceModalOpen,
        isEditModalOpen: state.isEditModalOpen,
        errorMsg: state.errorMsg,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
