const findSquares = (num) => {
  const divided = num / 2;
  let max = Math.pow(Math.ceil(divided), 2);
  let min = Math.pow(Math.floor(divided), 2);
  return `${max}-${min}`;
};

console.log(findSquares(11));
