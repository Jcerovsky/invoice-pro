"use client";

import React, { useContext } from "react";
import { Context } from "@/app/context/Context";

function Navbar() {
  const { theme } = useContext(Context)!;
  return (
    <div className="bg-gray-600 flex">
      <div className="bg-violet-500 rounded-r-full">
        <img src="/assets/logo.svg" alt="logo-img" className="p-2" />
      </div>
      <img
        src={`/assets/icon-${theme === "light" ? "moon" : "sun"}.svg`}
        alt={`${theme}-mode-logo`}
        className="hover:bg-white duration-300 cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
