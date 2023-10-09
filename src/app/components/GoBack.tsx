"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { Context } from "@/app/context/Context";

function GoBack({ showOnBiggerScreen }: { showOnBiggerScreen?: boolean }) {
  const { setState } = useContext(Context)!;
  return (
    <div
      className={`${
        !showOnBiggerScreen && "sm:hidden"
      } flex items-center gap-5 mb-6 cursor-pointer`}
      onClick={() => setState({ isInvoiceModalOpen: false })}
    >
      <Image
        width={10}
        height={14}
        src="/assets/icon-arrow-left.svg"
        alt="arrow-left-icon"
      />
      <span className="dark:text-white font-bold text-sm self-center mt-[0.125rem]">
        Go Back
      </span>
    </div>
  );
}

export default GoBack;
