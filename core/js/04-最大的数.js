

// 求数组中最大的数

function max(arr) {
  if (arr.length === 0) return 0
  return arr.reduce((prev, cur) => prev > cur ? prev : cur)
}

console.log(max([1,2,3,4,5,6,7]))