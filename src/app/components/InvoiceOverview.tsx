"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "@/app/context/Context";
import CustomCheckbox from "@/app/components/CustomCheckbox";
import { handleClickOutside } from "@/app/utils/handleClickOutside";

function InvoiceOverview() {
  const [isFilterMenuShown, setIsFilterMenuShown] = useState<boolean>(false);
  const { screenSize } = useContext(Context)!;
  const filterDivRef = useRef(null);

  useEffect(() => {
    if (isFilterMenuShown) {
      const handleMouseDown = (event: MouseEvent) => {
        handleClickOutside(event, filterDivRef, setIsFilterMenuShown);
      };
      document.addEventListener("mousedown", handleMouseDown);

      return () => {
        document.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [isFilterMenuShown]);

  return (
    <div className="flex mt-[7.5rem] desktop:mt-[4rem] mb-8 items-center gap-4">
      <div>
        <h1 className="text-2xl sm:text-5xl font-bold">Invoices</h1>
        <p>Total of 7 Invoices</p>
      </div>
      <div className="flex items-center ml-auto mr-4 cursor-pointer relative">
        <p
          className="font-medium"
          onClick={() => setIsFilterMenuShown((prevState) => !prevState)}
        >
          {screenSize === "small" ? "Filter" : "Filter by status"}
        </p>
        <img
          src={"/assets/icon-arrow-down.svg"}
          alt="arrow-img"
          className={`${isFilterMenuShown && "rotate-180 "} duration-300 ml-2`}
          onClick={() => setIsFilterMenuShown((prevState) => !prevState)}
        />
        {isFilterMenuShown && (
          <div
            className={`absolute w-[12rem] rounded-md p-6 left-0 shadow-xl bg-white z-20 top-[3.125rem] ${
              screenSize === "small"
                ? " -translate-x-1/3"
                : " -translate-x-[15%]"
            }`}
            ref={filterDivRef}
          >
            <CustomCheckbox status={"Draft"} />
            <CustomCheckbox status={"Pending"} />
            <CustomCheckbox status={"Paid"} />
          </div>
        )}
      </div>
      <button
        className="cursor-pointer duration-300 rounded-full h-[3rem] bg-buttonPurple hover:bg-violet-400 flex
      items-center py-2 pl-2 pr-4 gap-3 text-white"
      >
        <div className="bg-white w-8 h-8 rounded-full text-center flex mr-auto">
          <img src="/assets/icon-plus.svg" alt="add" className="m-auto" />
        </div>
        <p>{screenSize === "small" ? "New" : "New Invoice"}</p>
      </button>
    </div>
  );
}

export default InvoiceOverview;
