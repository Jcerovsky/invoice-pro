import React from "react";
import { capitaliseFirstLetter } from "@/app/utils/capitaliseFirstLetter";

function PaymentStatus({ status }: { status: string }) {
  const statusBgColor =
    status === "paid"
      ? "bg-green-100"
      : status === "draft"
      ? "bg-lightPurple"
      : "bg-orange-100";

  const statusTextColor =
    status === "paid"
      ? "green-400"
      : status === "draft"
      ? "mediumPurple"
      : "orange-400";

  const statusCircleColor =
    status === "paid"
      ? "bg-green-400"
      : status === "draft"
      ? "bg-mediumPurple"
      : "bg-orange-400";

  console.log(status);

  return (
    <div
      className={`pl-3 h-[2.5rem] w-[6.5rem] flex items-center rounded-md ${statusBgColor}`}
    >
      <span
        className={`w-2 h-2 rounded-full mr-2 ${
          status === "paid" || status === "draft" ? "ml-3" : ""
        } ${statusCircleColor}`}
      />
      <p className={`text-${statusTextColor} mt-1`}>
        {capitaliseFirstLetter(status)}
      </p>
    </div>
  );
}

export default PaymentStatus;
