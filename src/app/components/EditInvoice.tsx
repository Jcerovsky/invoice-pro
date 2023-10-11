"use client";

import React, { useContext } from "react";
import InvoiceForm from "@/app/components/InvoiceForm";
import { ModalProps } from "@/app/components/ModalWrapper";
import { usePathname } from "next/navigation";
import { Context } from "@/app/context/Context";

function EditInvoice({ isOpen, onClose }: ModalProps) {
  const { allInvoices } = useContext(Context)!;
  const params = usePathname();
  const id = params.split("/")[2];

  const editedInvoice = allInvoices.find((invoice) => invoice.id === id);
  return (
    <InvoiceForm
      isOpen={isOpen}
      onClose={onClose}
      formHeading={"Edit Invoice"}
      data={editedInvoice}
    />
  );
}

export default EditInvoice;
