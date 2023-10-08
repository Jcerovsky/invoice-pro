"use client";

import React, { useState } from "react";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import ItemList from "@/app/components/ItemList";
import ModalWrapper from "@/app/components/ModalWrapper";
import GoBack from "@/app/components/GoBack";
import PaymentTerms from "@/app/components/PaymentTerms";
import { calculateDueDate } from "@/app/utils/calculateDueDate";
import { useObjectState } from "@/app/hooks/useObjectState";

interface INewInvoiceProps {
  isOpen: boolean;
  onClose: () => void;
}

function NewInvoice({ isOpen, onClose }: INewInvoiceProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [paymentTerm, setPaymentTerm] = useState<string>("Select");
  const [formData, setFormData] = useObjectState({
    address: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    invoiceDate: "",
    projectDescription: "",
  });

  const handleSelect = (value: string) => {
    setPaymentTerm(value);
    console.log(calculateDueDate("2022-12-03", +value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const paymentTermValue =
    paymentTerm === "Select"
      ? paymentTerm
      : paymentTerm === "1"
      ? `${paymentTerm} day`
      : `${paymentTerm} days`;

  return (
    <ModalWrapper onClose={onClose} isOpen={isOpen}>
      <form
        className="bg-white dark:bg-themeColorBg sm:rounded-r-3xl p-6 xs:p-16 relative max-w-[38.75rem] overflow-y-scroll "
        onSubmit={handleSubmit}
      >
        <GoBack />
        <h1 className="dark:text-white text-3xl font-bold mb-[3rem]">
          New Invoice
        </h1>
        <div>
          <p className="text-heavyPurple font-bold mb-6">Bill from</p>
          <InputField
            labelName={"Street Address"}
            name={"address"}
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-[3rem]">
          <InputField
            labelName={"City"}
            name={"city"}
            onChange={handleInputChange}
            value={formData.city}
          />
          <InputField
            labelName={"Post Code"}
            name={"postCode"}
            onChange={handleInputChange}
            value={formData.postCode}
          />
          <InputField
            labelName={"Country"}
            name={"country"}
            onChange={handleInputChange}
            value={formData.country}
          />
        </div>
        <div>
          <p className="text-heavyPurple font-bold mb-6">Bill to</p>
          <InputField
            labelName={"Client's Name"}
            name={"clientName"}
            onChange={handleInputChange}
            value={formData.clientName}
          />
          <InputField
            labelName={"Client's Email"}
            name={"clientEmail"}
            onChange={handleInputChange}
            value={formData.clientEmail}
          />
          <InputField
            labelName={"Street Address"}
            id={"bill-to"}
            name={"clientAddress"}
            onChange={handleInputChange}
            value={formData.clientAddress}
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-4">
          <InputField
            labelName={"City"}
            id={"bill-to"}
            name={"clientCity"}
            onChange={handleInputChange}
            value={formData.clientCity}
          />
          <InputField
            labelName={"Post Code"}
            id={"bill-to"}
            name={"clientPostCode"}
            onChange={handleInputChange}
            value={formData.clientPostCode}
          />
          <InputField
            labelName={"Country"}
            id={"bill-to"}
            name={"clientCountry"}
            onChange={handleInputChange}
            value={formData.clientCountry}
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-x-4 mb-6">
          <div>
            <label
              className="text-mediumPurple dark:text-white"
              htmlFor={"invoice-date"}
            />
            <div className="relative flex items-center ">
              <InputField
                labelName={"Invoice Date"}
                style={"w-full"}
                type={"date"}
                name={"invoiceDate"}
                onChange={handleInputChange}
                value={formData.invoiceDate}
              />
            </div>
          </div>
          <div className="relative">
            <p className="mb-3 text-mediumPurple font-light">Payment Terms</p>
            <div
              className="border items-center flex justify-between border-lightPurple rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4 "
              onClick={() => setIsVisible((prevState) => !prevState)}
            >
              <span className="font-semibold">{paymentTermValue}</span>
              <img
                src={"/assets/icon-arrow-down.svg"}
                alt="arrow-img"
                className={`${isVisible && "rotate-180 "} duration-300 ml-2`}
              />
              <PaymentTerms handleSelect={handleSelect} isVisible={isVisible} />
            </div>
          </div>
        </div>
        <div>
          <InputField
            labelName={"Project Description"}
            name="projectDescription"
            onChange={handleInputChange}
            value={formData.projectDescription}
          />
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
          <Button
            style={"bg-buttonPurple hover:bg-purple-500 text-white"}
            type={"submit"}
          >
            Save & Send
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default NewInvoice;
