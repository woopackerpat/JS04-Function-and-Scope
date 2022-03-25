const isLeap = (year) => {
  if (year % 100 === 0 && year % 400 === 0) return true;
  if (year % 4 === 0) return true;
  return false;
};
