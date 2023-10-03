import React from "react";

interface IInputProps {
  labelName: string;
  id?: string;
  placeholder?: string;
  style?: string;
}

function InputField({ labelName, id, placeholder, style }: IInputProps) {
  return (
    <div className={`mb-4 ${style}`}>
      <label
        className="text-mediumPurple dark:text-white inline-block mb-3 font-light	"
        htmlFor={`${labelName}-${id}`}
      >
        {" "}
        {labelName}{" "}
      </label>
      <input
        type="text"
        id={`${labelName}-${id}`}
        className="border border-lightPurple dark:border-[rgba(37,_41,_69,_1)] dark:text-gray-200 rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:border-heavyPurple
        px-4"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
