// function curry(fn) {
//   const length = fn.length;
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
// test(2, 1)(3);

// const arr = [4, 3, 2, 1];

// function bubbleSort(arr) {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
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
//     throw Error(",...");
//   }
//   const self = this;
//   const args = Array.prototype.slice.call(arguments, 1);
//   return function () {
//     return self.apply(context, args);
//   };
// };

// Function.prototype.myApply = function (context) {
//   if (typeof this !== "function") {
//     throw Error("....");
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

// const obj = {
//   name: "xz",
// };
// function fn(a) {
//   console.log(this.name, a);
// }
// fn.myApply(obj, [1, 2]);

// 1, 1, 2, 3, 5

// function fib(n, prev = 1, next = 1) {
//   if (n <= 1) return prev;
//   return fib(n - 1, next, prev + next);
// }

// console.log(fib(5));
// let arr = [[1, 2], "2", [3, [4, 5]]];
// const flatten = function (arr) {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(cur instanceof Array ? flatten(cur) : cur);
//   }, []);
// };
// console.log(flatten(arr));

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
