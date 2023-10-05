import { IInvoice } from "@/app/context/Context";

export const generateRandomId = (data: IInvoice) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charCount = characters.length;

  for (let i = 0; i < 6; i++) {
    const randomNum = Math.ceil(Math.random() * charCount);
    result += characters[randomNum];
  }
  if (result in data) {
    generateRandomId(data);
    return;
  }
  return result;
};
