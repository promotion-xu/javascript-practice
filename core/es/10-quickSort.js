


const arr = [3,2,1,4,6,5]
// 1. 冒泡排序

// function bubbleSort(arr) {
//   const len = arr.length;
//   for (let i = 0; i < len; i ++) {
//     for (let j = i + 1; j < len; j ++) {
//       if (arr[i] > arr[j]) {
//         const temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }
// console.log(bubbleSort(arr))

// 2. 快排

function quickSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr
  const midIndex = Math.floor(len / 2)
  let left = []
  let right = []
  const midValue = arr[midIndex]
  for (let i = 0; i < len; i ++) {
    if (i !== midIndex) {
      if (arr[i] < midValue) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  }
  return arguments.callee(left).concat([midValue], arguments.callee(right))
}

console.log(quickSort(arr))