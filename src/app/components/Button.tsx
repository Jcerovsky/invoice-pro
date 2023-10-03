import React from "react";

interface IButtonProps {
  text: string;
  style: string;
  type?: "submit" | "reset" | "button";
}

function Button({ text, style, type = "button" }: IButtonProps) {
  return (
    <button
      type={type}
      className={`${style} px-6 cursor-pointer duration-300 rounded-full w-full h-[3rem] xs:whitespace-nowrap `}
    >
      {text}
    </button>
  );
}

export default Button;
