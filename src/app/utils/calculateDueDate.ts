import { formatDate } from "@/app/utils/formatDate";

export const calculateDueDate = (invoiceDate: string, dueDate: number) => {
  const date = new Date(invoiceDate);
  const dateWithAddedDays = date.setDate(date.getDate() + dueDate);
  const dueOn = new Date(dateWithAddedDays).toString();
  return formatDate(dueOn);
};
