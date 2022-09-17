export const getTime = (value: string) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const tt = String(date.getTime);

  return `${yyyy}-${MM}-${dd} ${tt}`;
};
