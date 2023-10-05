import React from "react";

function Page({ params }: { params: { name: string } }) {
  return (
    <div className="text-[100px] absolute m-auto">name is {params.name}</div>
  );
}

export default Page;
