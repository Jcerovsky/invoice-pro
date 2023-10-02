import React from "react";
import InputField from "@/app/components/InputField";

function NewInvoice() {
  return (
    <form className="dark:bg-themeColorBg sm:rounded-r-xl p-6">
      <div className="sm:hidden">
        <img src="/assets/icon-arrow-left.svg" alt="arrow-left-icon" />
        <p className="dark:text-white">Go Back</p>
      </div>
      <h1 className="dark:text-white text-2xl mb-[3rem]">New Invoice</h1>
      <div>
        <p className="text-heavyPurple font-bold">Bill From</p>
        <InputField labelName={"Street Address"} />
      </div>
      <div>
        <InputField labelName={"City"} />
        <InputField labelName={"Post Code"} />
        <InputField labelName={"Country"} />
      </div>
      <div>
        <p className="text-heavyPurple font-bold">Bill To</p>
        <InputField labelName={"Client's Name"} />
        <InputField labelName={"Client's Email"} />
        <InputField labelName={"Street Address"} id={"bill-to"} />
      </div>
      <div>
        <InputField labelName={"City"} id={"bill-to"} />
        <InputField labelName={"Post Code"} id={"bill-to"} />
        <InputField labelName={"Country"} id={"bill-to"} />
      </div>
      <div>
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
            <InputField labelName={"invoice-date"} />
          </div>
        </div>
        <div>
          <p>Payment Terms</p>
          <div
            className="border border-gray-700 rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4"
          >
            1 Day
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewInvoice;
