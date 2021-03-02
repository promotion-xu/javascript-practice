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

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

var arr = [3, 5, 7];
arr.foo = "hello";

for (var i in arr) {
  console.log(i);
}
// 结果是：
// 0
// 1
// 2
// foo
// arrCustom
// objCustom

var arr = [3, 5, 7];

for (let value of arr) {
  console.log(value);
  if (value == 5) {
    break;
  }
}
// 结果是：
// 3
// 5

let str = "boo";

for (let value of str) {
  console.log(value);
}
// 结果是：
// "b"
// "o"
// "o"
