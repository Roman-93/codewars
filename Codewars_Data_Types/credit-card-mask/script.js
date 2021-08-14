// return masked string
function maskify(cc) {
  let card = cc.toString().split("");
  let cardSliceEnd = card.slice(-4);
  let cardSliceStart = card.slice(0, -4);
  let newArray = [];
  cardSliceStart.forEach((n) => {
    newArray.push("#");
  });
  return newArray.join("") + cardSliceEnd.join("");
}

console.log(maskify("1234qwer456YUI=-0"));
