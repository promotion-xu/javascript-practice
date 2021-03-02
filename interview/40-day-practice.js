// function curry(fn) {
//   const len = fn.length; // 拿到形参个数
//   return function currying(...args) {
//     if (len === args.length) {
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
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (arr[i] > arr[j]) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// function quickSort(arr) {
//   const length = arr.length;
//   if (length <= 1) return arr;
//   const midIndex = Math.floor(length / 2);
//   const midValue = arr[midIndex];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < length; i++) {
//     if (i !== midIndex) {
//       if (arr[i] < midValue) {
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
//     throw Error("....");
//   }
//   const self = this;
//   const args = Array.prototype.slice.call(arguments, 1);
//   return function () {
//     self.apply(context, args);
//   };
// };

// function fn(a) {
//   console.log(this.name, a);
// }
// const obj = {
//   name: "xz",
// };

// const test = fn.myBind(obj, 1);
// test();

// Function.prototype.myApply = function (context) {
//   if (typeof this !== "function") {
//     throw Error("...");
//   }
//   context.fn = this;
//   let result;
//   if (arguments[1]) {
//     result = context.fn(arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// };

// function fn(a) {
//   console.log(this.name, a);
// }

// const test = fn.myApply(obj, [1]);

// Function.prototype.myCall = function (context) {
//   if (typeof this !== "function") {
//     throw Error("...");
//   }
//   context.fn = this;
//   const args = Array.prototype.slice.call(arguments, 1);
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// };

// const obj = {
//   name: "xz",
// };
// function fn(a, b) {
//   console.log(this.name, a, b);
// }

// const test = fn.myCall(obj, 1, 2);

// let arr = [1, [2, 3]];
// const flatten = function (arr) {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(cur instanceof Array ? flatten(cur) : cur);
//   }, []);
// };
// console.log(flatten(arr));

// // 节流
// function throttle(fn, wait) {
//     let prev = 0
//     return function () {
//         let now = Date.now()
//         if (now - prev > wait) {
//             fn.apply(null, arguments)
//             prev = now
//         }
//     }
// }

// // 防抖
// function debounce(fn, delay) {
//     let timer = null
//     return function () {
//         timer && clearTimeout(timer)
//         setTimeout(() => {
//             fn.apply(null, arguments)
//         }, delay)
//     }
// }

// function fib(n, prev = 1, next = 1) {
//     if (n <= 2) return prev
//     return fib(n - 1, next, prev + next)
// }

function hasPathSum(root, target) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return target === root.val;
  }
  return (
    hasPathSum(root.left, target - root.val) ||
    hasPathSum(root.right, target - root.val)
  );
}
