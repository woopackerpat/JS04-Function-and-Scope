let checkScore = (result) => {
  switch (result) {
    case "win":
      return 3;
      break;
    case "equal":
      return 1;
      break;
    case "lost":
      return 0;
      break;
  }
};
