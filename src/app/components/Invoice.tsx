"use client";

import React, { useContext } from "react";
import { Context, IInvoice } from "@/app/context/Context";
import PaymentStatus from "@/app/components/PaymentStatus";
import { useRouter } from "next/navigation";
import GoBack from "@/app/components/GoBack";
import { formatNumber } from "@/app/utils/formatNumber";

function Invoice({ invoiceData }: { invoiceData: IInvoice }) {
  const { screenSize } = useContext(Context)!;

  const totalSum = invoiceData.items.reduce((a, b) => a + b.total, 0);

  const router = useRouter();
  return (
    <>
      {/*<div*/}
      {/*  className={`flex items-center max-w-[45.625rem] cursor-pointer dark:text-white rounded-xl mb-4*/}
      {/*    justify-between bg-white dark:bg-themeColor p-6 border-transparent border hover:border-heavyPurple shadow-xl*/}
      {/*    transition ${screenSize === "large" && "py-4 pl-8 pr-6"}`}*/}
      {/*  onClick={() => router.push(`/invoice/${invoiceData.id}`)}*/}
      {/*>*/}
      {/*  <div className={`${screenSize === "large" && "flex gap-[2.5rem]"} `}>*/}
      {/*    <p className="mb-2 font-semibold  ">*/}
      {/*      <span className="text-mediumPurple">#</span>*/}
      {/*      {invoiceData.id}*/}
      {/*    </p>*/}
      {/*    <p className="mb-2 text-mediumPurple dark:text-gray-300">*/}
      {/*      Due {invoiceData.paymentDue}*/}
      {/*    </p>*/}
      {/*    <p*/}
      {/*      className={` font-bold text-xl ${*/}
      {/*        screenSize === "large" && "hidden"*/}
      {/*      }`}*/}
      {/*    >*/}
      {/*      $ {invoiceData.total}*/}
      {/*    </p>*/}
      {/*    <p*/}
      {/*      className={`text-mediumPurple text-sm font-normal dark:text-gray-300 ${*/}
      {/*        screenSize !== "large" && "hidden"*/}
      {/*      }`}*/}
      {/*    >*/}
      {/*      {invoiceData.clientName}*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div*/}
      {/*    className={`flex items-center gap-6 ${*/}
      {/*      screenSize === "large" ? "flex-row gap-[2.5rem]" : "flex-col"*/}
      {/*    }`}*/}
      {/*  >*/}
      {/*    <p*/}
      {/*      className={`text-mediumPurple text-sm font-normal dark:text-gray-300 ${*/}
      {/*        screenSize === "large" && "hidden"*/}
      {/*      }`}*/}
      {/*    >*/}
      {/*      {invoiceData.clientName}*/}
      {/*    </p>*/}
      {/*    <p*/}
      {/*      className={` font-bold text-xl ${*/}
      {/*        screenSize !== "large" && "hidden"*/}
      {/*      }`}*/}
      {/*    >*/}
      {/*      $ {invoiceData.total}*/}
      {/*    </p>*/}
      {/*    <PaymentStatus status={invoiceData.status} />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div>
        <GoBack />
        <div
          className={`mb-6 rounded-lg bg-white dark:bg-themeColor flex items-center py-6 px-8 justify-between ${
            screenSize !== "small" && ""
          }`}
        >
          <p className="dark:text-gray-300">Status</p>
          <PaymentStatus
            status={invoiceData.status}
            style={screenSize !== "small" ? "mr-auto ml-5" : ""}
          />
          <div className={`${screenSize === "small" && "hidden"} flex gap-2`}>
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
              className="px-6 py-2 cursor-pointer rounded-full bg-buttonPurple hover:bg-purple-500 text-white duration-200"
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
                screenSize === "small"
                  ? "flex-col gap-7"
                  : "flex-row justify-between"
              }`}
            >
              <div>
                <h2 className="text-xl font-semibold">
                  <span className="text-mediumPurple dark:text-zinc-100">
                    #
                  </span>
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
                    {invoiceData.createdAt}
                  </h2>
                </div>
                <div>
                  <p className="text-mediumPurple dark:text-zinc-100 mb-2">
                    Payment Due
                  </p>
                  <h2 className="text-lg font-semibold mb-8 ">
                    {invoiceData.paymentDue}
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
                <p className="text-mediumPurple dark:text-gray-200 mb-7">
                  Sent to
                </p>
                <h2 className="text-lg font-semibold">
                  {invoiceData.clientEmail}
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-lightPurple dark:bg-[#252945] rounded-t-lg px-8 pt-8 pb-2 ">
            <div className="flex items-center gap-6 ">
              <p className="mb-8 text-left">Item Name</p>
              <p className="mb-8 text-right ml-auto">QTY.</p>
              <p className="mb-8 text-right">Price</p>
              <p className="mb-8 text-right">Total</p>
            </div>
            {invoiceData.items.map((item) => (
              <div
                key={invoiceData.id}
                className="flex items-center gap-3 font-semibold"
              >
                <p className="mb-8 text-left">{item.name}</p>
                <p className="mb-8 text-left ml-auto">{item.quantity}</p>
                <p className="mb-8 text-left">${formatNumber(item.price)}</p>
                <p className="mb-8 text-left ">${formatNumber(item.total)}</p>
              </div>
            ))}
          </div>
          <div
            className={`dark:bg-neutral-800 bg-[#373B53] text-zinc-50 rounded-b-lg flex justify-between ${
              screenSize === "small" ? "p-6" : "p-8"
            }`}
          >
            <p>Amount Due</p>
            <h2 className="text-2xl">${formatNumber(totalSum)}</h2>
          </div>
          <div
            className={`fixed bottom-0 bg-white dark:bg-themeColor justify-center w-full left-0 flex gap-4 px-6 py-5 ${
              screenSize !== "small" && "hidden"
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
    </>
  );
}

export default Invoice;
