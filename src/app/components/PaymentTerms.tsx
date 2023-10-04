import React from "react";
import { valueOf } from "postcss";

function PaymentTerms() {
  const selectDivStyle =
    "p-4 hover:text-heavyPurple duration-200 border-b border-lightPurple dark:border-themeColorBg";

  const handleSelect = (value: string) => {
    console.log(value);
  };
  return (
    <div
      className="dark:bg-themeColor flex flex-col font-bold rounded-md w-full absolute z-20 top-[3.4rem] cursor-pointer
    left-0 font-bold"
      onClick={(e) => handleSelect(e.target.value)}
    >
      <div className={selectDivStyle}>1 Day</div>
      <div className={selectDivStyle}>7 Days</div>
      <div className={selectDivStyle}>14 Days</div>
      <div className={selectDivStyle}>30 Days</div>
    </div>
  );
}

export default PaymentTerms;
