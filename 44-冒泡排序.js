// 冒泡排序

let arr = [2, 4, 1, 3, 6, 8, 10, 9, 5];

for (let i = 0; i < arr.length; i++) {
  // i = 0, 1,
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
