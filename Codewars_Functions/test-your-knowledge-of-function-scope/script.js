let add = function (a) {
  return function (b) {
    return a + b;
  };
};
console.log(add()());
