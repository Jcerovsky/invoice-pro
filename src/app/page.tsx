import React from "react";
import InvoiceOverview from "@/app/components/InvoiceOverview";
import AllInvoices from "@/app/components/AllInvoices";

export default function Home() {
  return (
    <div className="max-w-[47.5rem] ml-auto mr-auto mt-[4.5rem] pb-[4rem] px-4 dark:text-white">
      <InvoiceOverview />
      <AllInvoices />
    </div>
  );
}
