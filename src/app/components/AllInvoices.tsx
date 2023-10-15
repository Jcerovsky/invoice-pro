"use client";

import React, { useContext, useEffect, useState } from "react";
import { Context, IInvoice } from "@/app/context/Context";
import Invoice from "@/app/components/Invoice";
import InvoiceOverview from "@/app/components/InvoiceOverview";
import NoInvoices from "@/app/components/NoInvoices";
import Loading from "@/app/loading";

interface ICheckboxProps {
  paid: boolean;
  draft: boolean;
  pending: boolean;
}

function AllInvoices() {
  const { allInvoices, checkboxState, isLoading } = useContext(Context)!;
  const [filteredInvoices, setFilteredInvoices] = useState<IInvoice[]>([]);

  const checkedItems = Object.keys(checkboxState).filter(
    (key) => checkboxState[key as keyof ICheckboxProps],
  );

  useEffect(() => {
    const handleFilter = () => {
      setFilteredInvoices(
        allInvoices.filter((invoice) => checkedItems.includes(invoice.status)),
      );
    };
    handleFilter();
  }, [checkboxState]);

  const invoiceCount =
    checkedItems.length !== 0 ? filteredInvoices.length : allInvoices.length;

  const invoicesToBeDisplayed =
    checkedItems.length !== 0 ? filteredInvoices : allInvoices;

  return (
    <div>
      <InvoiceOverview invoiceCount={invoiceCount} />

      {isLoading ? (
        <Loading />
      ) : invoicesToBeDisplayed.length === 0 ? (
        <NoInvoices />
      ) : (
        invoicesToBeDisplayed.map((invoice) => (
          <div key={crypto.randomUUID()}>
            <Invoice invoiceData={invoice} />
          </div>
        ))
      )}
    </div>
  );
}

export default AllInvoices;
