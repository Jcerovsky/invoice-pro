import React from "react";

interface InputProps {
  labelName: string;
  id?: string;
  placeholder?: string;
  style?: string;
}

function InputField({ labelName, id, placeholder, style }: InputProps) {
  return (
    <div className={`mb-4 ${style}`}>
      <label
        className="text-mediumPurple dark:text-white inline-block mb-3 font-medium	"
        htmlFor={`${labelName}-${id}`}
      >
        {" "}
        {labelName}{" "}
      </label>
      <input
        type="text"
        id={`${labelName}-${id}`}
        className="border border-lightPurple rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
