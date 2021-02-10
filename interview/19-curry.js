//函数的柯里化

function test(a, b, c) {
  console.log(a + b + c);
}

function curry(fn) {
  let limit = fn.length;
  return function currying(...args) {
    if (args.length === limit) {
      return fn.apply(null, args);
    }
    return function (...args2) {
      return currying.apply(null, [...args, ...args2]);
    };
  };
}

const x = curry(test);

x(1)(2, 3);
