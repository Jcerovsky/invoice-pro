export const formatNumber = (number: number): string => {
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return numberFormatter.format(number);
};
