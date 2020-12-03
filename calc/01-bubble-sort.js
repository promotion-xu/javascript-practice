const arr = [2, 1, 5, 6, 3, 4, 0, 10];

// 1. 直接调用sort, 会先调用默认的排序的方式，即先调用每个数组项的toString()转型方法，
// 然后按照字符串Unicode编码顺序来对字符串进行排序
// arr.sort();

// sort排序原理是什么？
// V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，
// 数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。

// arr.sort((a, b) => {
//   return a - b; // return true， 会将两个数交换， a-b>0, true, 会交换。即从小到大排序
// });

// 2. bubbleSort
// 原理：
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(arr));
