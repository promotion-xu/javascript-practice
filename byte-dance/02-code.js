// 1. 请编写一个函数，查找一个整形数组 nums 中的最长公共数字后缀。如
// 果无公共后缀，返回空
// 示例 1：nums = [620029, 318029, 404029, 1829]，输出 29。
// 示例 2：nums = [53972, 67, 1233321, 999]，输出空

// 1.
let nums = [620029, 318029, 404029, 1829];

function findCommon(arr) {
  let strArr = arr.map(item => {
    return String(item)
      .split("")
      .reverse();
  });

  console.log(strArr[0]);
  let result = [];
  for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 0; j < strArr[i].length - 1; j++) {
      console.log(j, strArr[i][j]);
    }
  }
}
console.log(findCommon(nums));

//2 .请实现一个方法 func，给定一个未排序的整数数组，输出没出现在这个数组中的最小正整数。时间复杂度须为 O(n)
// nums = [2,1,4]，输出 3
// 示例 2：nums = [2,-1,3,6,9]，输出 1
// let nums = [2, -1, 3, 6, 9];
function getMinNumber() {
  for (let i = 1; i <= 300; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}
// console.log(getMinNumber(nums));

// 3. 给你一堆 n 个箱子，箱子长 L、宽 W、高 H。箱子不能翻转，将箱子
// 堆起来时，下面箱子的长度、宽度和高度必须大于上面的箱子。实现一
// 种方法，搭出最高的一堆箱子。箱堆的高度为每个箱子高度的总和。输
// 入使用数组[L,W,H]表示每个箱子

// 示例 1：nums = [[1,1,1],[2,2,2],[3,3,3]]，输出 6
// 示例 2：nums = [[1,1,1],[2,3,4],[2,5,6],[3,4,5]]，输出 10
// 示例 3：nums = [[4,3,2],[2,3,4],[1,1,1],[3,6,7]]，输出 12
