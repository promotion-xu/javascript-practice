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

// 冒泡排序

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
// let arr = [5, 4, 2, 6, 6, 3, 6, 1];
// function quickSort(arr) {
//   let length = arr.length;
//   if (length <= 1) return arr;
//   let midIndex = Math.floor(length / 2);
//   let midValue = arr[midIndex];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < length; i++) {
//     if (midIndex !== i) {
//       if (arr[i] <= arr[midIndex]) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//   }
//   return quickSort(left).concat([midValue], quickSort(right));
// }

// console.log(quickSort(arr));

// let obj = {
//   name: "xz",
// };
// Function.prototype.myBind = function (context) {
//   if (typeof this !== "function") {
//     throw Error("caller is not a function");
//   }
//   let self = this;
//   let arg = Array.prototype.slice.call(arguments, 1);

//   return function () {
//     return self.apply(context, arg.concat(arguments));
//   };
// };

// function fn(a) {
//   console.log(this.name, a);
// }

// const test = fn.myBind(obj, 1);
// test();

// 1, 1, 2, 3, 5

// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// function fib(n, prev = 1, next = 1) {
//   if (n <= 1) return prev;
//   return fib(n - 1, next, prev + next);
// }

// console.log(fib(5));

// let arr = [[1, 2], "2", [3, [4, 5]]];
// const flatten = (arr) => {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(cur instanceof Array ? flatten(cur) : cur);
//   }, []);
// };
// console.log(flatten(arr));

// let tree = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 4,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 5,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null,
//   },
// };

// function hasPathSum(root, target) {
//   if (!root) return false;
//   if (!root.left && !root.right) {
//     return root.val === target;
//   }
//   return (
//     hasPathSum(root.left, target - root.val) ||
//     hasPathSum(root.right, target - root.val)
//   );
// }
// console.log(hasPathSum(tree, 8));
