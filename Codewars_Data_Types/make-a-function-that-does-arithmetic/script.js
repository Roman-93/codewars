function arithmetic(a, b, operator) {
  let c = Math.floor(a);
  let d = Math.floor(b);
  if (a < 0 || b < 0) {
    return "Please enter a positive number!";
  }
  if (operator == "add") {
    return c + d;
  } else if (operator == "subtract") {
    return c - d;
  } else if (operator == "multiply") {
    return c * d;
  } else if (operator == "divide") {
    return c / d;
  }
}
