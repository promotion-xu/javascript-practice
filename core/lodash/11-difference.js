

// 取数组交集

const arr1 = [1, 2, 3, 5]
const arr2 = [1, 2, 4]

const intersection = (...list) => {
  const result = list.reduce((x, y) => {
    return x.filter(i => y.includes(i))
  })
  return [...new Set(result)]
}
console.log(intersection(arr1, arr2))