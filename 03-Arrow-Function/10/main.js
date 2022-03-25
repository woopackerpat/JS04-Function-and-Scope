const countDay = (day, month, year) => {
  ageDay = 31 - day;
  ageMonth = (12 - month) * 30;
  ageYear = (2020 - year) * 12 * 30;
  return ageDay + ageMonth + ageYear;
};
