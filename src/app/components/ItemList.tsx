import React, { useRef, useState } from "react";
import InputField from "@/app/components/InputField";

function ItemList() {
  const [totalSum, setTotalSum] = useState<number>(0);

  const qtyRef = useRef();

  return (
    <div>
      <h2>Item List</h2>
      <InputField labelName={"Item Name"} />
      <div>
        <InputField labelName={"Qty."} placeholder={"1"} />
        <InputField labelName={"Price"} placeholder={"0"} />
        <div>
          <p className="text-mediumPurple">Total</p>
          <p className="font-bold">${totalSum}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
