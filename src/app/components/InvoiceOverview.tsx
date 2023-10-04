"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";

function InvoiceOverview() {
  const [isFilterMenuShown, setIsFilterMenuShown] = useState<boolean>(false);

  return (
    <div className="flex mt-14 mb-8 px-4 items-center gap-4">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Invoices</h1>
        <p>7 Invoices</p>
      </div>
      <div
        className="flex items-center ml-auto cursor-pointer"
        onClick={() => setIsFilterMenuShown((prevState) => !prevState)}
      >
        <p>Filter</p>
        <img
          src={"/assets/icon-arrow-down.svg"}
          alt="arrow-img"
          className={`${isFilterMenuShown && "rotate-180 "} duration-300 ml-2`}
        />
      </div>
      <button
        className="cursor-pointer duration-300 rounded-full h-[3rem] bg-buttonPurple hover:bg-violet-400 flex
      items-center py-2 pl-2 pr-4 gap-3 text-white"
      >
        <div className="bg-white w-8 h-8 rounded-full text-center flex mr-auto">
          <img src="/assets/icon-plus.svg" alt="add" className="m-auto" />
        </div>
        <p>New</p>
      </button>
    </div>
  );
}

export default InvoiceOverview;
