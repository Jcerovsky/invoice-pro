import React, { useState } from "react";

function CustomCheckbox({ status }: { status: string }) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleCheck = () => {
    setChecked((prevState) => !prevState);
  };
  return (
    <div className="mb-1">
      <div className="flex gap-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            id={status}
            checked={checked}
            onChange={handleCheck}
            className="hidden"
          />
          <span className="rounded-sm w-4 h-4  bg-lightPurple overflow-hidden">
            {checked && (
              <svg
                className="w-4 h-4 text-white bg-buttonPurple  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </span>
          <span className="mt-[0.125rem] font-medium mt-1">{status}</span>
        </label>
      </div>
    </div>
  );
}

export default CustomCheckbox;
