"use client";

import React, { useContext } from "react";
import { Context } from "@/app/context/Context";
import Invoice from "@/app/components/Invoice";

function AllInvoices() {
  const { allInvoices } = useContext(Context)!;
  return (
    <div>
      {allInvoices.map((invoice) => (
        <div key={invoice.id}>
          <Invoice invoiceData={invoice} />
        </div>
      ))}
    </div>
  );
}

export default AllInvoices;
