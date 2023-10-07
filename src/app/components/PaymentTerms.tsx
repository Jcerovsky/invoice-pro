import React from "react";

interface IProps {
  handleSelect: (value: string) => void;
  isVisible: boolean;
}

function PaymentTerms({ handleSelect, isVisible }: IProps) {
  const selectDivStyle =
    "p-4 hover:text-heavyPurple  duration-200 border-b border-lightPurple dark:border-themeColorBg";

  return (
    <div
      className={`dark:bg-themeColor shadow-xl flex flex-col font-bold rounded-lg w-full absolute z-20 top-[3.4rem] cursor-pointer
        left-0 font-bold ${!isVisible && "hidden"}`}
    >
      <div className={selectDivStyle} onClick={() => handleSelect("1")}>
        1 Day
      </div>
      <div className={selectDivStyle} onClick={() => handleSelect("7")}>
        7 Days
      </div>
      <div className={selectDivStyle} onClick={() => handleSelect("14")}>
        14 Days
      </div>
      <div className={selectDivStyle} onClick={() => handleSelect("30")}>
        30 Days
      </div>
    </div>
  );
}

export default PaymentTerms;
