// Sum of Triangular Numbers

const findSquares = (num) => {
  const divided = num / 2;
  let max = Math.pow(Math.ceil(divided), 2);
  let min = Math.pow(Math.floor(divided), 2);
  return `${max}-${min}`;
};
console.log(findSquares(11));

// // Rearrange Number to Get its Maximum

function maxRedigit(num) {
  if (num > 99 && num < 1000) {
    return Number(String(num).split("").sort().reverse().join(""));
  } else {
    return null;
  }
}
console.log(maxRedigit(666));

// Format a string of names like 'Bart, Lisa & Maggie'.

// Find the stray number

let array = [17, 17, 3, 17, 17, 17, 17];

unique = array.filter((a) => array.filter((b) => b === a).length == 1);

console.log(unique);
