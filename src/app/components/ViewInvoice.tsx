"use client";

import React, { useContext } from "react";
import GoBack from "@/app/components/GoBack";
import PaymentStatus from "@/app/components/PaymentStatus";
import { formatDate } from "@/app/utils/formatDate";
import { formatNumber } from "@/app/utils/formatNumber";
import { Context, IInvoice } from "@/app/context/Context";

function ViewInvoice({ invoiceData }: { invoiceData: IInvoice }) {
  const { screenSize } = useContext(Context)!;

  const totalSum = invoiceData.items.reduce((a, b) => a + b.total, 0);

  const hideWhenScreenXs = `${screenSize === "xs" && "hidden"}`;
  return (
    <div>
      <GoBack />
      <div
        className={`mb-6 rounded-lg bg-white dark:bg-themeColor flex items-center py-6 px-8 justify-between ${
          screenSize !== "small" && screenSize !== "xs" && ""
        }`}
      >
        <p className="dark:text-gray-300">Status</p>
        <PaymentStatus
          status={invoiceData.status}
          style={
            screenSize !== "small" && screenSize !== "xs" ? "mr-auto ml-5" : ""
          }
        />
        <div
          className={`${
            (screenSize === "small" || screenSize === "xs") && "hidden"
          } flex gap-2`}
        >
          <button
            className="px-6 py-2 cursor-pointer rounded-full bg-zinc-50 hover:bg-lightPurple text-mediumPurple
             dark:bg-[#252945] dark:hover:bg-themeColorBg dark:text-white duration-200"
          >
            Edit
          </button>
          <button className="px-6 py-2 cursor-pointer rounded-full bg-red-500 hover:bg-red-400 text-white duration-200">
            Delete
          </button>
          <button
            className="px-6 py-2 cursor-pointer rounded-full bg-buttonPurple enabled:hover:bg-purple-500 text-white duration-200
              disabled:opacity-50  disabled:cursor-not-allowed"
            disabled={invoiceData.status === "paid"}
          >
            Mark as Paid
          </button>
        </div>
      </div>
      <div
        className={`rounded-lg dark:bg-themeColor bg-white ${
          screenSize === "small" ? "p-6" : "p-12"
        }  `}
      >
        <div>
          <div
            className={`flex mb-7 ${
              screenSize === "small" || screenSize === "xs"
                ? "flex-col gap-7"
                : "flex-row justify-between"
            }`}
          >
            <div>
              <h2 className="text-xl font-semibold">
                <span className="text-mediumPurple dark:text-zinc-100">#</span>
                {invoiceData.id}
              </h2>
              <p className="text-mediumPurple dark:text-zinc-100">
                {invoiceData.description}
              </p>
            </div>
            <div className="tracking-wider leading-4 text-mediumPurple dark:text-zinc-100">
              <p>{invoiceData.senderAddress.street}</p>
              <p>{invoiceData.senderAddress.city}</p>
              <p>{invoiceData.senderAddress.postCode}</p>
              <p>{invoiceData.senderAddress.country}</p>
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-4 ">
            <div>
              <div className="mb-8">
                <p className="text-mediumPurple dark:text-zinc-100 mb-2">
                  Invoice Date
                </p>
                <h2 className="text-lg font-semibold">
                  {formatDate(invoiceData.createdAt)}
                </h2>
              </div>
              <div>
                <p className="text-mediumPurple dark:text-zinc-100 mb-2">
                  Payment Due
                </p>
                <h2 className="text-lg font-semibold mb-8 ">
                  {formatDate(invoiceData.paymentDue)}
                </h2>
              </div>
            </div>
            <div>
              <p className="text-mediumPurple dark:text-zinc-100 mb-2">
                Bill to
              </p>
              <h2 className="text-lg font-semibold mb-2">
                {invoiceData.clientName}
              </h2>
              <div className="tracking-wider leading-4 text-mediumPurple dark:text-zinc-100 ">
                <p>{invoiceData.clientAddress.street}</p>
                <p>{invoiceData.clientAddress.city}</p>
                <p>{invoiceData.clientAddress.postCode}</p>
                <p>{invoiceData.clientAddress.country}</p>
              </div>
            </div>
            <div className="mb-7">
              <p className="text-mediumPurple dark:text-gray-200">Sent to</p>
              <h2 className="text-lg font-semibold">
                {invoiceData.clientEmail}
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-lightPurple dark:bg-[#252945] rounded-t-lg px-8 pt-8 pb-2 ">
          <div className="flex items-center gap-6">
            <p className="mb-8 text-left">Item Name</p>
            <p className={`mb-8 text-right ml-auto ${hideWhenScreenXs}`}>
              QTY.
            </p>
            <p className={`mb-8 text-right  ${hideWhenScreenXs}`}>Price</p>
            <p
              className={`mb-8 text-right ${
                screenSize === "xs" ? "ml-auto" : "mr-7"
              }`}
            >
              Total
            </p>
          </div>
          {invoiceData.items.map((item) => (
            <div
              key={invoiceData.id}
              className="flex items-center gap-3 font-semibold"
            >
              {screenSize === "xs" ? (
                <div>
                  <p
                    className={`${
                      screenSize === "xs" ? "mb-2" : "mb-8"
                    } text-lef`}
                  >
                    {item.name}
                  </p>
                  <p className="text-gray-500 ">
                    {item.quantity} x ${formatNumber(item.price)}
                  </p>
                </div>
              ) : (
                <p className="mb-8 text-left">{item.name}</p>
              )}

              <p className={`mb-8 text-left ml-auto ${hideWhenScreenXs}`}>
                {item.quantity}
              </p>
              <p className={`mb-8 text-left ${hideWhenScreenXs}`}>
                ${formatNumber(item.price)}
              </p>
              <p className="mb-8 text-left ">${formatNumber(item.total)}</p>
            </div>
          ))}
        </div>
        <div
          className={`dark:bg-neutral-800 bg-[#373B53] text-zinc-50 rounded-b-lg flex flex-wrap justify-between ${
            screenSize === "small" ? "p-6" : "p-8"
          }`}
        >
          <p>Amount Due</p>
          <h2 className="text-2xl">${formatNumber(totalSum)}</h2>
        </div>
        <div
          className={`fixed bottom-0 bg-white dark:bg-themeColor justify-center w-full left-0 flex gap-4 px-6 py-5 ${
            screenSize !== "small" && screenSize !== "xs" && "hidden"
          }`}
        >
          <button
            className="px-6 py-2 cursor-pointer rounded-2xl bg-zinc-50 hover:bg-lightPurple text-mediumPurple
             dark:bg-[#252945] dark:hover:bg-themeColorBg dark:text-white duration-200"
          >
            Edit
          </button>
          <button className="px-6 py-2 cursor-pointer rounded-2xl bg-red-500 hover:bg-red-400 text-white duration-200">
            Delete
          </button>
          <button
            className="px-6 py-2 cursor-pointer rounded-2xl bg-buttonPurple hover:bg-purple-500 text-white duration-200"
            disabled={invoiceData.status === "paid"}
          >
            Mark as Paid
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoice;
