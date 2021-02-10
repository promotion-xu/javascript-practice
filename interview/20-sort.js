let arr = [9, 1, 3, 5, 4, 7, 6];

// 冒泡排序
// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

function quickSort(arr) {
  let length = arr.length;
  if (length <= 1) return arr;
  let midIndex = Math.floor(length / 2);
  let midValue = arr[midIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      if (arr[i] < arr[midIndex]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSort(left).concat([midValue], quickSort(right));
}

console.log(quickSort(arr));
