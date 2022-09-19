export const getDate = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `(${yyyy}-${mm}-${dd})`;

  // return `${yyyy}-${mm}-${dd}`
};

export const getDate2 = (value) => {
  const createDate = new Date(value);
  const year = String(createDate.getFullYear());
  const month = String(createDate.getMonth() + 1).padStart(2, "0");
  const date = String(createDate.getDate()).padStart(2, "0");
  const hours = String(createDate.getHours()).padStart(2, "0");
  const minutes = String(createDate.getMinutes()).padStart(2, "0");

  const today = new Date();
  const todayYear = String(today.getFullYear());
  const todayMonth = String(today.getMonth() + 1).padStart(2, "0");
  const todayDate = String(today.getDate()).padStart(2, "0");

  if (todayYear === year && todayMonth === month && todayDate === date) {
    return `${hours}:${minutes}`;
  } else {
    return `${year}-${month}-${date} ${hours}:${minutes}`;
  }
};
