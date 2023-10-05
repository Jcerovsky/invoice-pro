"use client";

import React, { useContext } from "react";
import { Context, IInvoice } from "@/app/context/Context";
import PaymentStatus from "@/app/components/PaymentStatus";
import { useRouter } from "next/navigation";
import GoBack from "@/app/components/GoBack";

function Invoice({ invoiceData }: { invoiceData: IInvoice }) {
  const { screenSize } = useContext(Context)!;

  const totalSum = invoiceData.items.reduce((a, b) => a + b.total, 0);

  const router = useRouter();
  return (
    <>
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
            Due {invoiceData.paymentDue}
          </p>
          <p
            className={` font-bold text-xl ${
              screenSize === "large" && "hidden"
            }`}
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
            className={` font-bold text-xl ${
              screenSize !== "large" && "hidden"
            }`}
          >
            $ {invoiceData.total}
          </p>
          <PaymentStatus status={invoiceData.status} />
        </div>
      </div>
      <div>
        <GoBack />
        <div className={`${screenSize !== "small" && "justify-between"} mb-6`}>
          <div className="flex items-center justify-between ">
            <p className="dark:text-gray-500 py-6 px-8 rounded-md">Status</p>
            <PaymentStatus status={invoiceData.status} />
          </div>
          <div className={`${screenSize === "small" && "hidden"} `}>
            <button
              className="px-6 py-4 cursor-pointer rounded-full bg:zinc-50 hover:bg-lightPurple text-mediumPurple
             dark:bg-[rgb(37,_41,_69] dark:hover:bg-themeColorBg dark:text-white"
            >
              Edit
            </button>
            <button className="px-6 py-4 cursor-pointer rounded-full bg:red-500 hover:bg-red-400 text-white">
              Delete
            </button>
            <button
              className="px-6 py-4 cursor-pointer rounded-full bg-buttonPurple hover:bg-purple-500 text-white"
              disabled={invoiceData.status === "paid"}
            >
              Mark as Paid
            </button>
          </div>
        </div>
        <div className="rounded-md dark:bg-themeColor">
          <div
            className={`${screenSize !== "small" && "flex justify-between"}`}
          >
            <div>
              <h2 className="text-2xl">{invoiceData.id}</h2>
              <p>{invoiceData.description}</p>
            </div>
            <div className="tracking-wider leading-5 ">
              <p>{invoiceData.senderAddress.street}</p>
              <p>{invoiceData.senderAddress.city}</p>
              <p>{invoiceData.senderAddress.postCode}</p>
              <p>{invoiceData.senderAddress.country}</p>
            </div>
            <div className="flex flex-wrap">
              <div>
                <div className="mb-8">
                  <p className="dark:text-gray-500">Invoice Date</p>
                  <h2>{invoiceData.createdAt}</h2>
                </div>
                <div>
                  <p className="dark:text-gray-500">Payment Due</p>
                  <h2>{invoiceData.paymentDue}</h2>
                </div>
              </div>
              <div>
                <p className="dark:text-gray-500">Bill To</p>
                <h2>{invoiceData.clientName}</h2>
                <div className="tracking-wider leading-5 ">
                  <p>{invoiceData.clientAddress.street}</p>
                  <p>{invoiceData.clientAddress.city}</p>
                  <p>{invoiceData.clientAddress.postCode}</p>
                  <p>{invoiceData.clientAddress.country}</p>
                </div>
              </div>
              <div className="mb-7">
                <p className="dark:text-gray-500 mb-3">Sent to</p>
                <h2>{invoiceData.clientEmail}</h2>
              </div>
            </div>
          </div>
        </div>
        <table className="bg-lightPurple dark:bg-themeColor rounded-md px-8 pt-8 pb-2">
          <tr>
            <td className="mb-8 text-left">Item Name</td>
            <td className="mb-8 text-right">QTY.</td>
            <td className="mb-8 text-right">Price</td>
            <td className="mb-8 text-right">Total</td>
          </tr>
          {invoiceData.items.map((item) => (
            <tr key={invoiceData.id}>
              <td className="mb-8 text-left">{item.name}</td>
              <td className="mb-8 text-left">{item.quantity}</td>
              <td className="mb-8 text-left">{item.price}</td>
              <td className="mb-8 text-left">{item.total}</td>
            </tr>
          ))}
        </table>
        <div className="dark:bg-neutral-800 bg-neutral-500 rounded-b-md p-8 flex justify-between">
          <p>Amount Due</p>
          <h2 className="text-4xl">${totalSum}</h2>
        </div>
        <div
          className={`fixed bottom-0 dark:bg-themeColor flex justify-center gap-8 px-6 py-5 ${
            screenSize !== "small" && "hidden"
          }`}
        >
          <button
            className="px-6 py-4 cursor-pointer rounded-full bg:zinc-50 hover:bg-lightPurple text-mediumPurple
             dark:bg-[rgb(37,_41,_69] dark:hover:bg-themeColorBg dark:text-white"
          >
            Edit
          </button>
          <button className="px-6 py-4 cursor-pointer rounded-full bg:red-500 hover:bg-red-400 text-white">
            Delete
          </button>
          <button
            className="px-6 py-4 cursor-pointer rounded-full bg-buttonPurple hover:bg-purple-500 text-white"
            disabled={invoiceData.status === "paid"}
          >
            Mark as Paid
          </button>
        </div>
      </div>
    </>
  );
}

export default Invoice;
