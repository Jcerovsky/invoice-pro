import React from "react";

function NoInvoices() {
  return (
    <div className="rounded-lg p-6 xxs:p-12 bg-white dark:bg-themeColor">
      <h1 className="mb-2 text-2xl ">There are no invoices</h1>
      <p>To continue, create a new invoice</p>
    </div>
  );
}

export default NoInvoices;
