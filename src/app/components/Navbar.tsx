"use client";

import React, { useContext, useEffect } from "react";
import { Context } from "@/app/context/Context";
import NewInvoice from "@/app/components/NewInvoice";

function Navbar() {
  const { theme, setState } = useContext(Context)!;

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);

  return (
    <div
      className="bg-themeColor flex items-center h-[5rem] overflow-hidden w-screen desktop:flex-col
    desktop:h-screen desktop:w-[5rem] "
    >
      <div className="bg-gradient-to-b from-violet-600 to-violet-400 rounded-r-2xl w-[5rem] h-[5rem] flex">
        <img
          src="/assets/logo.svg"
          alt="logo-img"
          className="p-2 w-12 ml-auto mr-auto"
        />
      </div>
      <img
        src={`/assets/icon-${theme === "light" ? "moon" : "sun"}.svg`}
        alt={`theme-logo`}
        className="hover:text-white duration-300 cursor-pointer self-center ml-auto px-6 desktop:ml-0 desktop:mt-auto"
        onClick={() =>
          setState({ theme: theme === "light" ? "dark" : "light" })
        }
      />
      <div className="border-l border-gray-500 desktop:border-l-none desktop:border-t">
        <img
          src="/assets/image-avatar.jpg"
          alt="avatar-img"
          className="self-center
         rounded-full my-6 mx-8 w-[2.5rem]"
        />
      </div>
    </div>
  );
}

export default Navbar;
