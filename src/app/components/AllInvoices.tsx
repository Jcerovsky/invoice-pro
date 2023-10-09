"use client";

import React, { useContext, useEffect, useState } from "react";
import { Context, IInvoice } from "@/app/context/Context";
import Invoice from "@/app/components/Invoice";
import InvoiceOverview from "@/app/components/InvoiceOverview";

interface ICheckboxProps {
  paid: boolean;
  draft: boolean;
  pending: boolean;
}

function AllInvoices() {
  const { allInvoices, checkboxState } = useContext(Context)!;
  const [filteredInvoices, setFilteredInvoices] = useState<IInvoice[]>([]);

  useEffect(() => {
    const handleFilter = () => {
      const checkedItems = Object.keys(checkboxState).filter(
        (key) => checkboxState[key as keyof ICheckboxProps],
      );

      setFilteredInvoices(
        allInvoices.filter((invoice) => checkedItems.includes(invoice.status)),
      );
    };

    handleFilter();
  }, [checkboxState]);

  console.log("filtered", filteredInvoices);

  const invoicesToBeDisplayed =
    filteredInvoices?.length > 0 ? filteredInvoices : allInvoices;

  return (
    <div>
      <InvoiceOverview />

      {invoicesToBeDisplayed.map((invoice) => (
        <div key={crypto.randomUUID()}>
          <Invoice invoiceData={invoice} />
        </div>
      ))}
    </div>
  );
}

export default AllInvoices;
