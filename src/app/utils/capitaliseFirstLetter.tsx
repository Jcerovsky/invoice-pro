export const capitaliseFirstLetter = (value: string) => {
  return value.split("")[0].toUpperCase() + value.slice(1);
};
