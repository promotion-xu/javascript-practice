// 给定两个数组，写一个方法来计算它们的交集。
// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

const num1 = [1, 2, 2, 1];
const num2 = [2, 2];

let result = [];
for (let i = 0; i < num1.length; i++) {
  if (num2.includes(num1[i])) {
    result.push(num1[i]);
  }
}
console.log(result);
