import React from "react";

interface InputProps {
  labelName: string;
  id?: string;
  placeholder?: string;
}

function InputField({ labelName, id, placeholder }: InputProps) {
  return (
    <div>
      <label
        className="text-mediumPurple dark:text-white"
        htmlFor={`${labelName}-${id}`}
      >
        {" "}
        {labelName}{" "}
      </label>
      <input
        type="text"
        id={`${labelName}-${id}`}
        className="border border-gray-700 rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
