const arr = [
  //   {
  //     id: 0,
  //     name: "xz",
  //   },
  {
    id: 1,
    name: "wq",
  },
  {
    id: 2,
    name: "wq",
  },
  {
    id: 3,
    name: "wq",
  },
];
const arr1 = [1, 2, 3, 4, 5];

const a = arr.reduce((prev, cur, index, array) => {
  return prev.id + cur.id;
});
console.log(a);

const b = arr1.reduce((prev, cur, index, array) => {
  return prev + cur;
});

console.log(b);
