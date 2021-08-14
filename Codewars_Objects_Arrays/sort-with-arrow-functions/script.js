let OrderPeople = function (people) {
  return people.sort(function (a, b) {
    return a.age - b.age;
  });
};
console.log(
  OrderPeople([
    { age: 74, name: "Anna" },
    { age: 13, name: "Andy" },
    { age: 42, name: "Bred" },
    { age: 34, name: "Romn" },
    { age: 55, name: "Victor" },
  ])
);
