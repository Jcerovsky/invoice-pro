import React from "react";
import { capitaliseFirstLetter } from "@/app/utils/capitaliseFirstLetter";

function PaymentStatus({ status, style }: { status: string; style?: string }) {
  const statusBgColor =
    status === "paid"
      ? "bg-green-100"
      : status === "draft"
      ? "bg-lightPurple"
      : "bg-orange-100";

  const statusTextColor =
    status === "paid"
      ? "text-green-500"
      : status === "draft"
      ? "text-mediumPurple"
      : "text-orange-500";

  const statusCircleColor =
    status === "paid"
      ? "bg-green-400"
      : status === "draft"
      ? "bg-mediumPurple"
      : "bg-orange-400";

  return (
    <div
      className={`pl-3 h-[2.5rem] w-[6.5rem] flex items-center rounded-md ${statusBgColor} ${style}`}
    >
      <span
        className={`w-2 h-2 rounded-full mr-2 ${
          status === "paid" || status === "draft" ? "ml-3" : ""
        } ${statusCircleColor}`}
      />
      <p className={`${statusTextColor} mt-1`}>
        {capitaliseFirstLetter(status)}
      </p>
    </div>
  );
}

export default PaymentStatus;
