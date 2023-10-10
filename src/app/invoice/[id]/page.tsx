"use client";

import React, { useContext } from "react";
import ViewInvoice from "@/app/components/ViewInvoice";
import Loading from "@/app/loading";
import { Context } from "@/app/context/Context";
//
// function fetchInvoiceData(id: string) {
//   return data.find((invoice) => invoice.id === id);
// }

function Page({ params }: { params: { id: string } }) {
  const { allInvoices } = useContext(Context)!;

  const invoiceData = allInvoices.find((invoice) => invoice.id === params.id);
  if (invoiceData !== undefined) {
    return <ViewInvoice invoiceData={invoiceData} />;
  } else return <Loading />;
}

export default Page;
