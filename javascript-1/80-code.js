// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。

// 示例1：
// nums1 = [1, 3]
// nums2 = [2]
// 中位数是 2.0

// 示例 2：
// nums1 = [1, 2]
// nums2 = [3, 4]
// 中位数是(2 + 3) / 2 = 2.5

const num1 = [1, 2, 3, 4, 5];
const num2 = [9, 8, 7, 6, 10];
//不考虑时间复杂度的情况下 把两个数组合并 -> 排序 -> 单数取中间，双数取中间两个平均值
const findMedian = (num1, num2) => {
  const arr = num1.concat(num2).sort((a, b) => a - b);
  const length = arr.length;
  if (length % 2 === 0) {
    // 是偶数，取中间两个数的平均数

    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  return arr[Math.ceil(length / 2) - 1];
};

console.log(findMedian(num1, num2));
