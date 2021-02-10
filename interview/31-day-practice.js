// function curry(fn) {
//   let length = fn.length;
//   return function currying(...args) {
//     if (length === args.length) {
//       return fn.apply(null, args);
//     }
//     return function (...args2) {
//       return currying.apply(null, [...args, ...args2]);
//     };
//   };
// }

// function fn(a, b, c) {
//   console.log(a + b + c);
// }

// const test = curry(fn);

// test(1)(2, 3);

// let arr = [8, 2, 1, 4, 5, 3, 6, 10];
// function bubbleSort(arr) {
//   let length = arr.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
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
//   let length = arr.length;
//   if (length <= 1) return arr;
//   let midIndex = Math.floor(length / 2);
//   let midValue = arr[midIndex];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < length; i++) {
//     if (i !== midIndex) {
//       if (arr[i] < arr[midIndex]) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//   }
//   return quickSort(left).concat([midValue], quickSort(right));
// }

// console.log(quickSort(arr));

// Function.prototype.myBind = function (context) {
//   if (typeof this !== "function") {
//     return;
//   }

//   let self = this;
//   let arg = Array.prototype.slice.call(arguments, 1);
//   return function () {
//     self.apply(context, arg.concat(arguments));
//   };
// };

// let obj = {
//   name: "xz",
// };
// function fn(a) {
//   console.log(this.name, a);
// }

// const test = fn.myBind(obj, 1);
// test();

// function fib(n, prev = 1, next = 1) {
//   if (n <= 1) return prev;
//   return fib(n - 1, next, prev + next);
// }

// console.log(fib(5));

// let arr = [1, [2, 3]];
// function flatten(arr) {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(cur instanceof Array ? flatten(cur) : cur);
//   }, []);
// }

// console.log(flatten(arr));
