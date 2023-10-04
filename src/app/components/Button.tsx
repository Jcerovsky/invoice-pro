import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  style: string;
  type?: "submit" | "reset" | "button";
}

function Button({ children, style, type = "button" }: IButtonProps) {
  return (
    <button
      type={type}
      className={`${style} px-6 cursor-pointer duration-300 rounded-full w-full h-[3rem] xs:whitespace-nowrap `}
    >
      {children}
    </button>
  );
}

export default Button;
