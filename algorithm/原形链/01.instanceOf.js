

// 实现instanceOf

console.log([] instanceof Array) // true

console.log(([]).__proto__ === Array.prototype)


const instanceOf  = (A, B) => {
  let p = A
  while (p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}

console.log(instanceOf([], Array))
console.log(instanceOf([], Object))