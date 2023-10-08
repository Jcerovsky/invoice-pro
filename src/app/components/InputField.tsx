import React from "react";

interface IInputProps {
  labelName: string;
  id?: string;
  placeholder?: string;
  type?: string;
  style?: string;
  value?: string | number;
  min?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  max?: string | number;
}

function InputField({
  labelName,
  id,
  placeholder,
  type = "text",
  style,
  value,
  min,
  onChange,
  max,
  name,
}: IInputProps) {
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
        type={type}
        id={`${labelName}-${id}`}
        className="border border-lightPurple dark:border-[rgba(37,_41,_69,_1)] dark:text-gray-200 rounded-md py-4 h-[3rem]
         w-full dark:bg-themeColor hover:border-heavyPurple dark:hover:border-heavyPurple px-4 placeholder-py-6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={true}
        max={max}
        min={min}
        name={name}
      />
    </div>
  );
}

export default InputField;
