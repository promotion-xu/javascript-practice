// 函数的柯里化

// 当一个函数由多个参数时，先传递一部分参数调用它（这部分参数以后永远不变）
// 然后返回一个新的函数接收剩余的参数，返回结果

// function checkAge(min, age) {
//   return age >= min
// }

// function checkAge(min) {
//   return function(age) {
//     return age >= min;
//   };
// }

// const checkAge = min => age => age >= min;

// const checkAge18 = checkAge(18);
// console.log(checkAge18(20));
// console.log(checkAge18(24));
// console.log(checkAge18(26));

const _ = require("lodash");

const match = _.curry(function(reg, str) {
  return str.match(reg);
});

const hasSpace = match(/\s+/g);
const hasNumber = match(/\d+/g);

// console.log(hasSpace("helloworld"));
// console.log(hasNumber("sad"));

const filter = _.curry(function(func, array) {
  return array.filter(func);
});

// console.log(filter(hasSpace, ["helo xuzhne", "asd"]));

const findSpace = filter(hasSpace);
console.log(findSpace(["helo xuzhne", "asd"]));
