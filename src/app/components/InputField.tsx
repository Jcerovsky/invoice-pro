import React from "react";

function InputField({ labelName }: { labelName: string }) {
  return (
    <div>
      <label className="text-violet-300 dark:text-white font-semibold">
        {" "}
        {labelName}{" "}
      </label>
      <input
        type="text"
        id={labelName}
        className="border border-gray-700 rounded-md py-4 h-[3rem] w-full dark:bg-themeColor hover:bg-violet-600"
      />
    </div>
  );
}

export default InputField;
