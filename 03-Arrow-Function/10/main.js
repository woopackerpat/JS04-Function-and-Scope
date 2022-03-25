const isLeap = (year) => {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) return true;
  if (year % 4 === 0) return true;
  return false;
};

const countDayAge = (year) => {
  let sumAge = 0;

  for (let countYear = year; countYear < 2020; countYear++) {
    if (isLeap(countYear)) sumAge += 366;
    else sumAge += 365;
  }

  return sumAge;
};
