// add(1); 	// 1
// add(1)(2);  	// 3
// add(1)(2)(3)；  // 6
// add(1)(2, 3);   // 6
// add(1, 2)(3);   // 6
// add(1, 2, 3);   // 6

const curry = (fn, length) => {
  length = length || fn.length;
  return function currying(...args) {
    if (args.length === length) {
      return fn.apply(null, args);
    }
    return (..._args) => {
      return currying.apply(null, [...args, ..._args]);
    };
  };
};

const sum = (x, y, z) => x + y + z;

const add = curry(sum);

console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
