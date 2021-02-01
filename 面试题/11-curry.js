//函数的柯里化

function test(a, b, c) {
  console.log(a + b + c);
}

// function curry(fn) {
//   var limit = fn.length;
//   return function currying(...args) {
//     if (args.length >= limit) {
//       return fn.apply(null, args);
//     } else {
//       return function (...args2) {
//         console.log(args2, args);
//         return currying.apply(null, args.concat(args2));
//       };
//     }
//   };
// }

function curry(fn) {
  let limit = fn.length; // 形参个数
  return function currying(...args) {
    if (args.length >= limit) {
      // 传参与形参个数相等。直接执行函数
      return fn.apply(null, args);
    } else {
      return function (...args2) {
        return currying.apply(null, [...args, ...args2]);
      };
    }
  };
}

const x = curry(test);

x(1, 2)(3, 4);
