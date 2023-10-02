import React from "react";

function NewInvoice() {
  return (
    <form className="dark:bg-themeColorBg sm:rounded-r-xl">
      <div className="sm:hidden">
        <img src="/assets/icon-arrow-left.svg" alt="arrow-left-icon" />
        <p className="dark:text-white">Go Back</p>
      </div>
      <h1 className="dark:text-white text-2xl mb-[3rem]">New Invoice</h1>
      <p className="text-violet-700">Bill From</p>
    </form>
  );
}

export default NewInvoice;
