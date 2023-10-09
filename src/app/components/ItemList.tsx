"use client";

import React from "react";
import InputField from "@/app/components/InputField";
import { formatNumber } from "@/app/utils/formatNumber";

interface IProps {
  name: string;
  price: number | string;
  total: number;
  quantity: string | number;
  index: number;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    valueToBeChanged?: "itemPrice" | "itemQuantity",
  ) => void;
  handleDelete: (index: number) => void;
}

function ItemList({
  handleInputChange,
  name,
  price,
  quantity,
  total,
  index,
  handleDelete,
}: IProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center mb-6 gap-3 ">
        <InputField
          labelName={"Item Name"}
          style="max-xs:basis-full flex-[12_1_0%]"
          value={name}
          onChange={(e) => handleInputChange(e, index)}
          name="itemName"
        />
        <InputField
          labelName={"Qty."}
          placeholder={"1"}
          style={"flex-[3_1_0%]"}
          type={"number"}
          value={quantity}
          name="itemQuantity"
          onChange={(e) => handleInputChange(e, index, "itemQuantity")}
        />
        <InputField
          labelName={"Price"}
          placeholder={"0"}
          type={"number"}
          name="itemPrice"
          value={price}
          style={"flex-[4_1_0%]"}
          onChange={(e) => handleInputChange(e, index, "itemPrice")}
        />
        <div className="relative flex-[3_1_0%]">
          <p className="text-mediumPurple dark:text-white font-light absolute top-[-1.75rem] ">
            Total
          </p>
          <p className="font-bold dark:text-white mt-[1.25rem]">
            ${formatNumber(total)}
          </p>
        </div>
        <div
          className="pt-3 mt-auto mb-auto justify-self-end"
          onClick={() => handleDelete(index)}
        >
          <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473
             0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
              fill="#888EB0"
              className={
                index !== 0
                  ? "cursor-pointer hover:fill-red-500 transition-all duration-200 "
                  : "cursor-not-allowed"
              }
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
