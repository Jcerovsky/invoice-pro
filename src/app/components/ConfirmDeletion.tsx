import React from "react";

interface I {
  invoiceId: string;
  handleDelete: () => void;
  setIsDeleteInvoiceModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConfirmDeletion({
  invoiceId,
  handleDelete,
  setIsDeleteInvoiceModalOpen,
}: I) {
  return (
    <div className="bg-white dark:bg-themeColor max-w-[30rem] p-6 xxs:p-12 rounded-lg font-medium">
      <h2 className="mb-4 text-2xl font-semibold">Confirm Deletion</h2>
      <p className="text-mediumPurple  dark:text-white mb-4">
        Are you sure you want to delete invoice{" "}
        <span className="dark:text-mediumPurple">#{invoiceId}</span>? This
        action cannot be undone.
      </p>
      <div className="flex flex-col xxs:flex-row xxs:justify-end gap-2">
        <button
          className="px-6 py-3 cursor-pointer rounded-full duration-300 bg-[#252945] hover:bg-themeColorBg text-mediumPurple
        dark:text-white hover:text-zinc-50"
          onClick={() => setIsDeleteInvoiceModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="px-6 py-3 cursor-pointer rounded-full duration-300 bg-red-500 hover:bg-red-300 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeletion;
