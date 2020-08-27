// 冒泡排序

let arr = [2, 4, 1, 3, 6, 8, 10, 9, 5];

for (let i = 0; i < arr.length; i++) {
  // i = 0, 1,
  let flag = true; // 循环开始时设置一个flag为true, 若在一个循环内没有发生交换，则数组已经有序
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      flag = false;
    }
  }
  if (flag) break;
}
console.log(arr);
