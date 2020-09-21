const arr = [
  {
    name: "1",
    age: "1",
    children: [{ name: "1-1", age: "1-1" }, { name: "1-2", age: "1-2" }]
  },
  {
    name: "2",
    age: "2",
    children: [{ name: "2-1", age: "2-1" }, { name: "2-2", age: "2-2" }]
  },
  {
    name: "3",
    age: "3",
    children: [{ name: "3-1", age: "3-1" }, { name: "3-2", age: "3-2" }]
  }
];

const flatten = arr => {
  let result = [];
  flat(arr);
  function flat(arr) {
    arr.forEach(v => {
      result.push(v);
      if (v.children) {
        flat(v.children);
      }
    });
  }
  return result;
};

console.log(flatten(arr));
