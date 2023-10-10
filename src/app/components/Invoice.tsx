"use client";

import React, { useContext } from "react";
import { Context, IInvoice } from "@/app/context/Context";
import PaymentStatus from "@/app/components/PaymentStatus";
import { useRouter } from "next/navigation";
import { formatDate } from "@/app/utils/formatDate";

function Invoice({ invoiceData }: { invoiceData: IInvoice }) {
  const { screenSize } = useContext(Context)!;

  const router = useRouter();
  return (
    <div
      className={`flex items-center max-w-[45.625rem] cursor-pointer dark:text-white rounded-xl mb-4
          justify-between bg-white dark:bg-themeColor p-6 border-transparent border hover:border-heavyPurple shadow-xl
          transition ${screenSize === "large" && "py-4 pl-8 pr-6"}`}
      onClick={() => router.push(`/invoice/${invoiceData.id}`)}
    >
      <div className={`${screenSize === "large" && "flex gap-[2.5rem]"} `}>
        <p className="mb-2 font-semibold  ">
          <span className="text-mediumPurple">#</span>
          {invoiceData.id}
        </p>
        <p className="mb-2 text-mediumPurple dark:text-gray-300">
          Due {formatDate(invoiceData.paymentDue)}
        </p>
        <p
          className={` font-bold text-xl ${screenSize === "large" && "hidden"}`}
        >
          $ {invoiceData.total}
        </p>
        <p
          className={`text-mediumPurple text-sm font-normal dark:text-gray-300 ${
            screenSize !== "large" && "hidden"
          }`}
        >
          {invoiceData.clientName}
        </p>
      </div>
      <div
        className={`flex items-center gap-6 ${
          screenSize === "large" ? "flex-row gap-[2.5rem]" : "flex-col"
        }`}
      >
        <p
          className={`text-mediumPurple text-sm font-normal dark:text-gray-300 ${
            screenSize === "large" && "hidden"
          }`}
        >
          {invoiceData.clientName}
        </p>
        <p
          className={` font-bold text-xl ${screenSize !== "large" && "hidden"}`}
        >
          $ {invoiceData.total}
        </p>
        <PaymentStatus status={invoiceData.status} />
      </div>
    </div>
  );
}

export default Invoice;
