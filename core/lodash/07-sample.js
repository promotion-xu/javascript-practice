// 从数组中随机取一个数



Array.prototype.sample = function () {
  if (!Array.isArray(this)) return new TypeError('this is not array')
  const len = this.length;
  return this[Math.floor(Math.random() * len)]
}

// Math.random() // (0, 1)
// len (1, 4)
const arr = [1, 2, 3, 4]
const random = arr.sample()

console.log(random)