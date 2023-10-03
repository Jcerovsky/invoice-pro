import React from "react";
import InputField from "@/app/components/InputField";
import Image from "next/image";
import ItemList from "@/app/components/ItemList";
import Button from "@/app/components/Button";

function NewInvoice() {
  return (
    <form className="dark:bg-themeColorBg sm:rounded-r-xl p-6 xs:p-16 max-w-[38.75rem]">
      <div className="sm:hidden flex items-center gap-5 mb-6">
        <Image
          width={10}
          height={14}
          src="/assets/icon-arrow-left.svg"
          alt="arrow-left-icon"
        />
        <span className="dark:text-white font-bold self-center mt-[0.125rem]">
          Go Back
        </span>
      </div>
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
          <p className="mb-3 text-mediumPurple font-medium">Payment Terms</p>
          <div
            className="border border-lightPurple rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4 "
          >
            1 Day
          </div>
        </div>
      </div>
      <ItemList />
      <Button
        style={
          "bg-purple-50 hover:bg-blue-100 text-mediumPurple mb-[2.875rem] dark:bg-[rgba(124,_93,_250,_1)] dark:text-gray-300 dark:hover:bg-purple-500"
        }
        text={"+ Add New Item"}
      />
      <div className="grid grid-cols-3 gap-2">
        <Button
          style={
            "bg-purple-50 hover:bg-blue-100 text-mediumPurple max-w-[6rem] dark:hover:bg-neutral-800 dark:hover:text-white"
          }
          text={"Discard"}
        />
        <Button
          style={
            "bg-neutral-700 hover:bg-neutral-600 text-gray-400 ml-auto dark:hover:bg-neutral-800 dark:hover:text-gray-200"
          }
          text={"Save as Draft"}
        />
        <Button
          style={"bg-[rgba(124,_93,_250,_1)] hover:bg-purple-500 text-white"}
          text={"Save & Send"}
        />
      </div>
    </form>
  );
}

export default NewInvoice;
