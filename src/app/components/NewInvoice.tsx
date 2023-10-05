"use client";

import React from "react";
import InputField from "@/app/components/InputField";
import Image from "next/image";
import Button from "@/app/components/Button";
import ItemList from "@/app/components/ItemList";
import ModalWrapper from "@/app/components/ModalWrapper";
import GoBack from "@/app/components/GoBack";

function NewInvoice({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <ModalWrapper onClose={onClose} isOpen={isOpen}>
      <form className="bg-white dark:bg-themeColorBg sm:rounded-r-3xl p-6 xs:p-16 relative max-w-[38.75rem] overflow-y-scroll ">
        <GoBack />
        <h1 className="dark:text-white text-3xl font-bold mb-[3rem]">
          New Invoice
        </h1>
        <div>
          <p className="text-heavyPurple font-bold mb-6">Bill From</p>
          <InputField labelName={"Street Address"} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-[3rem]">
          <InputField labelName={"City"} />
          <InputField labelName={"Post Code"} />
          <InputField labelName={"Country"} />
        </div>
        <div>
          <p className="text-heavyPurple font-bold mb-6">Bill To</p>
          <InputField labelName={"Client's Name"} />
          <InputField labelName={"Client's Email"} />
          <InputField labelName={"Street Address"} id={"bill-to"} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-4">
          <InputField labelName={"City"} id={"bill-to"} />
          <InputField labelName={"Post Code"} id={"bill-to"} />
          <InputField labelName={"Country"} id={"bill-to"} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-6">
          <div>
            <label
              className="text-mediumPurple dark:text-white"
              htmlFor={"invoice-date"}
            />
            <div className="relative">
              <img
                src="/assets/icon-calendar.svg"
                alt="calendar-icon"
                className="absolute top-1/2 left-4"
              />
              <InputField labelName={"Invoice Date"} />
            </div>
          </div>
          <div>
            <p className="mb-3 text-mediumPurple font-light">Payment Terms</p>
            <div
              className="border border-lightPurple rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4 "
            >
              1 Day
              {/*<PaymentTerms />*/}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-gray-500 font-medium text-2xl mb-4">Item List</h2>
          <ItemList />
        </div>
        <Button
          style={
            "bg-purple-50 hover:bg-blue-100 text-mediumPurple mb-[2.875rem] dark:bg-buttonPurple dark:text-gray-300 dark:hover:bg-purple-500"
          }
        >
          + Add New Item
        </Button>
        <div className="grid grid-cols-3 gap-2">
          <Button
            style={
              "bg-purple-50 hover:bg-blue-100 text-mediumPurple max-w-[6rem] dark:hover:bg-neutral-800 dark:hover:text-white"
            }
          >
            Discard
          </Button>
          <Button
            style={
              "bg-neutral-700 hover:bg-neutral-600 text-gray-400 ml-auto dark:hover:bg-neutral-800 dark:hover:text-gray-200"
            }
          >
            Save as Draft
          </Button>
          <Button style={"bg-buttonPurple hover:bg-purple-500 text-white"}>
            Save & Send
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default NewInvoice;
