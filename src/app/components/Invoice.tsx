import React from "react";
import { IInvoice } from "@/app/context/Context";
import PaymentStatus from "@/app/components/PaymentStatus";

function Invoice({ invoiceData }: { invoiceData: IInvoice }) {
  return (
    <div
      className="flex items-center max-w-[45.625rem] cursor-pointer dark:text-white rounded-xl mb-4
  justify-between bg-white dark:bg-themeColor p-6 border-transparent border hover:border-heavyPurple shadow-xl
  transition"
    >
      <div>
        <p className="mb-5 font-semibold">
          <span className="text-mediumPurple">#</span>
          {invoiceData.id}
        </p>
        <p className="mb-5 text-mediumPurple">Due {invoiceData.paymentDue}</p>
        <p className="mb-5 font-bold text-xl ">$ {invoiceData.total}</p>
      </div>
      <div className="flex flex-col items-center gap-9">
        <p className="text-gray-500">{invoiceData.clientName}</p>
        <PaymentStatus status={invoiceData.status} />
      </div>
    </div>
  );
}

export default Invoice;
