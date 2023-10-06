"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function GoBack() {
  const router = useRouter();
  return (
    <div
      className="sm:hidden flex items-center gap-5 mb-6 cursor-pointer"
      onClick={() => router.push("/")}
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
