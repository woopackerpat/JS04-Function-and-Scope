const isLeap = (year) => {
  if (year % 100 && year % 400) return true;
  if (year % 4 === 0) return true;
  return false;
};
