import React from "react";
import data from "../../data/data.json";
import ViewInvoice from "@/app/components/ViewInvoice";
import Loading from "@/app/loading";

function fetchInvoiceData(id: string) {
  return data.find((invoice) => invoice.id === id);
}

async function Page({ params }: { params: { id: string } }) {
  const invoiceData = fetchInvoiceData(params.id);
  if (invoiceData !== undefined) {
    return <ViewInvoice invoiceData={invoiceData} />;
  } else return <Loading />;
}

export default Page;
