// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 复制代码说明:

// 必须在原数组上操作，不能拷贝额外的数组。

// 尽量减少操作次数。
const arr = [0, 1, 0, 3, 12];
const calcArr = (arr) => {
  return arr
    .filter(Boolean) // 先过滤出0的元素
    .concat([...Array(arr.length - arr.filter(Boolean).length)].fill(0)); // 再补上
};

console.log(calcArr(arr));
