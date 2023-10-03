"use client";

import React, { useContext, useEffect } from "react";
import InputField from "@/app/components/InputField";
import { Context } from "@/app/context/Context";
import { formatNumber } from "@/app/utils/formatNumber";

function ItemList() {
  const { name, quantity, price, total, setState } = useContext(Context)!;

  useEffect(() => {
    setState({ total: +quantity * +price });
  }, [quantity, price]);

  const handlePriceChange = (value: string) => {
    if (price === "0") return setState({ price: "" });
    setState({ price: value });
  };

  const handleQuantityChange = (value: string) => {
    if (quantity === "0") return setState({ quantity: "" });
    setState({ quantity: value });
  };
  return (
    <div>
      <div className="flex flex-wrap items-center mb-6 gap-3 ">
        <InputField
          labelName={"Item Name"}
          style="max-xs:basis-full flex-[12_1_0%]"
          value={name}
          onChange={(e) => setState({ name: e.target.value })}
        />
        <InputField
          labelName={"Qty."}
          placeholder={"1"}
          style={"flex-[3_1_0%]"}
          type={"number"}
          value={quantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
        />
        <InputField
          labelName={"Price"}
          placeholder={"0"}
          type={"number"}
          value={price}
          style={"flex-[4_1_0%]"}
          onChange={(e) => handlePriceChange(e.target.value)}
        />
        <div className="relative flex-[3_1_0%]">
          <p className="text-mediumPurple dark:text-white font-light absolute top-[-1.75rem] ">
            Total
          </p>
          <p className="font-bold dark:text-white mt-[1.25rem]">
            ${formatNumber(total)}
          </p>
        </div>
        <div className="pt-3 mt-auto mb-auto justify-self-end">
          <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473
             0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
              fill="#888EB0"
              className="cursor-pointer hover:fill-red-500 transition-all duration-200 "
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
