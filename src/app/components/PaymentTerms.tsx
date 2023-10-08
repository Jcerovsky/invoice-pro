import React from "react";

interface IProps {
  handleSelect: (value: string) => void;
  isVisible: boolean;
}

function PaymentTerms({ handleSelect, isVisible }: IProps) {
  const selectDivStyle =
    "p-3 hover:text-heavyPurple  duration-200 border-b border-lightPurple dark:border-themeColorBg";
  const shadowStyle =
    "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]";
  return (
    <div
      className={`dark:bg-themeColor bg-white ${shadowStyle} flex flex-col font-bold rounded-lg w-full absolute z-20 top-24 
      cursor-pointer left-0 font-bold ${!isVisible && "hidden"}`}
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
