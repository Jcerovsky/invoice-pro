"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "@/app/context/Context";
import CustomCheckbox from "@/app/components/CustomCheckbox";
import { handleClickOutside } from "@/app/utils/handleClickOutside";
import NewInvoice from "@/app/components/NewInvoice";

function InvoiceOverview() {
  const [isFilterMenuShown, setIsFilterMenuShown] = useState<boolean>(false);
  const [isInvoiceShown, setIsInvoiceShown] = useState<boolean>(false);

  const { screenSize, checkboxState, setState } = useContext(Context)!;
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
    <div className="flex mt-[7.5rem] desktop:mt-[4rem] mb-8 items-center gap-4 flex-wrap">
      <div>
        <h1 className="text-2xl sm:text-5xl font-bold">Invoices</h1>
        <p>Total of 7 Invoices</p>
      </div>

      <div
        className="flex items-center ml-auto mr-4 cursor-pointer relative"
        ref={filterDivRef}
      >
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
        <div
          className={` ${
            !isFilterMenuShown && "hidden"
          } absolute w-[12rem] rounded-md p-6 left-0 shadow-2xl bg-white z-20 top-[3.125rem] dark:bg-themeColor ${
            screenSize === "small" ? " -translate-x-1/3" : " -translate-x-[15%]"
          }`}
        >
          <CustomCheckbox
            status={"Draft"}
            checked={checkboxState["draft"]}
            handleCheck={() =>
              setState({
                checkboxState: {
                  ...checkboxState,
                  draft: !checkboxState.draft,
                },
              })
            }
          />
          <CustomCheckbox
            status={"Pending"}
            checked={checkboxState["pending"]}
            handleCheck={() =>
              setState({
                checkboxState: {
                  ...checkboxState,
                  pending: !checkboxState.pending,
                },
              })
            }
          />
          <CustomCheckbox
            status={"Paid"}
            checked={checkboxState["paid"]}
            handleCheck={() =>
              setState({
                checkboxState: {
                  ...checkboxState,
                  paid: !checkboxState.paid,
                },
              })
            }
          />
        </div>
      </div>
      <button
        className="cursor-pointer duration-300 rounded-full h-[3rem] bg-buttonPurple hover:bg-violet-400 flex
      items-center py-2 pl-2 pr-4 gap-3 text-white"
        onClick={() => setIsInvoiceShown((prevState) => !prevState)}
      >
        <div className="bg-white w-8 h-8 rounded-full text-center flex mr-auto">
          <img src="/assets/icon-plus.svg" alt="add" className="m-auto" />
        </div>
        <p>{screenSize === "small" ? "New" : "New Invoice"}</p>
      </button>
      <NewInvoice
        isOpen={isInvoiceShown}
        onClose={() => setIsInvoiceShown(false)}
      />
    </div>
  );
}

export default InvoiceOverview;
