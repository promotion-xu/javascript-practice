function curry(fn) {
  const len = fn.length;
  return function currying(...args) {
    if (len === args.length) {
      return fn.apply(null, args)
    } 
    return function (...args2) {
      return currying.apply(null, [...args, ...args2])
    }
  }
}

function add (x, y) {
  return x + y
}
const fn = curry(add)

console.log(fn(2)(3))