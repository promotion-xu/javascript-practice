const arr = [
  {
    name: "1",
    children: [{ name: "2" }],
  },
  { name: "3" },
  {
    name: "4",
    children: [
      {
        name: "5",
        children: [{ name: "6" }],
      },
      {
        name: "7",
        children: [{ name: "8" }],
      },
    ],
  },
];

const flatten = (arr) => {
  let result = [];
  fla(arr);
  function fla(arr) {
    arr.forEach((v) => {
      if (v.children) {
        result.push({ name: v.name });
        fla(v.children);
      } else {
        result.push(v);
      }
    });
  }
  return result;
};

console.log(flatten(arr));

// const flatten = (arr) => {
//   let result = [];
//   fla(arr);
//   function fla(array) {
//     array.forEach((v) => {
//       result.push(v);
//       if (v.children) {
//         fla(v.children);
//       }
//     });
//   }
//   return result;
// };

// const result = flatten(arr);
// console.log(result);
