function max(a, b = 0, c = 0, d = 0) {
  if (a === null) return;

  let value = [a, b, c, d];
  let maxValue = 0;

  for (let i = 0; i < value.length; i++) {
    if (isNaN(value[i])) return NaN;
  }

  for (let i = 0; i < value.length; i++) {
    if (maxValue >= value[i]) maxValue;
    else maxValue = value[i];
  }

  return maxValue;
}
