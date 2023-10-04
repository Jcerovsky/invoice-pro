"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";

function InvoiceOverview() {
  const [isFilterMenuShown, setIsFilterMenuShown] = useState<boolean>(false);

  return (
    <div className="flex mt-14 mb-8">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Invoices</h1>
        <p>7 Invoices</p>
      </div>
      <div
        className="flex items-center"
        onClick={() => setIsFilterMenuShown((prevState) => !prevState)}
      >
        <p>Filter</p>
        <img
          src={"/assets/icon-arrow-down.svg"}
          alt="arrow-img"
          className={`${isFilterMenuShown && "rotate-180 "} duration-300`}
        />
      </div>
      <Button style={"bg-buttonPurple"}>
        {" "}
        <img src="/assets/icon-plus.svg" alt="add" />
      </Button>
    </div>
  );
}

export default InvoiceOverview;
