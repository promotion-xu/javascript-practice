const obj = {
  name: "xz",
  age: 26,
};

obj.num = 1;

const arr = [1, [1, 2], obj];

for (const key in obj) {
  console.log(key);
}

// for (const value of arr) {
//   console.log(value);
// }
