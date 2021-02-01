let arr = [2, 1, 3, 5, 9, 7, 6];

// 冒泡排序
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// 快速排序

function quickSort(arr) {
  const length = arr.length;
  if (length <= 1) return arr;
  // 中心点
  let midIndex = Math.floor(length / 2);
  let left = [];
  let right = [];
  let midValue = arr[midIndex];
  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      if (arr[i] < arr[midIndex]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return arguments.callee(left).concat([midValue], arguments.callee(right));
}

console.log(quickSort(arr));
