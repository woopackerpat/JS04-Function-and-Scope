let calFactorial = (n) => {
  let i = 1;
  while (i < n) {
    n = n * (n - i);
    i++;
  }
};
