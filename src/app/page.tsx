import React from "react";
import AllInvoices from "@/app/components/AllInvoices";

export default function Home() {
  return (
    <div className="max-w-[47.5rem] ml-auto mr-auto mt-[4.5rem] pb-[4rem] px-4 dark:text-white">
      <AllInvoices />
    </div>
  );
}
