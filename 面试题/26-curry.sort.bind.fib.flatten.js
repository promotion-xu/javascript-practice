// function fn(a, b, c) {
//   console.log(a + b + c);
// }

// function curry(fn) {
//   let limit = fn.length;
//   return function currying(...args) {
//     if (limit === args.length) {
//       return fn.apply(null, args);
//     }
//     return function (...args2) {
//       return currying.apply(null, [...args, ...args2]);
//     };
//   };
// }

// const test = curry(fn);
// test(1)(2, 3);

// sort

// let arr = [9, 1, 3, 5, 4, 7, 6];

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let length = arr.length;
//   let midIndex = Math.floor(length / 2);
//   let midValue = arr[midIndex];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < length; i++) {
//     if (i !== midIndex) {
//       if (arr[i] < arr[midIndex]) {
//         right.push(arr[i]);
//       } else {
//         left.push(arr[i]);
//       }
//     }
//   }
//   return quickSort(left).concat([midValue], quickSort(right));
// }

// console.log(quickSort(arr));

// let obj = {
//   name: "1",
// };
// function fn(a) {
//   console.log(this.name, a);
// }
// Function.prototype.myBind = function (context) {
//   if (typeof this !== "function") {
//     throw Error("caller is not a function");
//   }
//   let self = this;
//   let arg = Array.prototype.slice.call(arguments, 1);
//   return function () {
//     self.apply(context, arg.concat(arguments));
//   };
// };

// const test = fn.myBind(obj, 2, 3);
// test();

// 1, 1, 2, 3, 5, 8,
// function fib(n) {
//     if (n <= 2) return 1
//     return fib(n - 1) + fib(n - 2)
// }

// function fib(n, prev = 1, next = 1) {
//   if (n <= 1) return prev;
//   return fib(n - 1, next, prev + next);
// }

// // fib(10, 1, 1)
// // fib(9, 1, 2)
// // fib(8, 2, 3)
// // fib(7, 3, 5)
// // fib(6, 5, 8)
// console.log(fib(10));

// let arr = [[1, 2], "2", [3, [4, 5]]];
// const flatten = (arr) => {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(cur instanceof Array ? flatten(cur) : cur);
//   }, []);
// };
// console.log(flatten(arr));
