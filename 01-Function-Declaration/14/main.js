function max(a, b, c, d) {
  if (+a && +b && +c && +d) return NaN;
  if (a === "" || b === "" || c === "" || d === "") return undefined;

  return Math.max(a, b, c, d);
}
