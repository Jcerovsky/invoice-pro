import { IInvoice } from "@/app/context/Context";

export const generateRandomId = (data: IInvoice[]) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charCount = characters.length;

  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * charCount);
    result += characters.charAt(randomNum);
  }
  if (data.some((invoice) => invoice.id === result)) {
    generateRandomId(data);
    return;
  }
  return result;
};
