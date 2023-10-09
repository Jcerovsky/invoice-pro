"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { Context } from "@/app/context/Context";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

function GoBack({ showOnBiggerScreen }: { showOnBiggerScreen?: boolean }) {
  const { setState } = useContext(Context)!;
  const router = useRouter();
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const handleGoBack = async () => {
    setIsWaiting(true);
    setState({ isInvoiceModalOpen: false });
    await router.push("/");
    setIsWaiting(false);
  };
  if (isWaiting) {
    return <Loading />;
  }

  return (
    <div
      className={`${
        !showOnBiggerScreen && "sm:hidden"
      } flex items-center gap-5 mb-6 cursor-pointer`}
      onClick={handleGoBack}
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
