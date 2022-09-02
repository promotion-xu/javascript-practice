

// 从左向右计算
const composeLeft = (...fns) => fns.reduce((f,g) => (...args) => g(f(...args)))

// 从右向左计算
const composeRight = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)))
const add5 = x => x + 5
const multiply = x => x * 10
const left = composeLeft(
  add5,
  multiply
)
const right = composeRight(
  add5,
  multiply
)
console.log(left(10)) // 105
console.log(right(10)) // 105