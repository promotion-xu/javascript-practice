// 随机生成一个长度为 10 的整数类型的数组，
// 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
// 将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

// 1. 冒泡，i > i + 1, 删除i
// 2. 将剩余的元素，按连续的元素，分割成新的数组

const deleteIndex = (arr) => {
  arr.forEach((v, i) => {
    if (i + 1 > arr.length) return;
    if (v > arr[i + 1]) {
      arr.splice(i, 1);
    }
  });
  return arr;
};

const splitArr = (arr) => {
  let result = [];
  let index = 0; // 默认的截取下标为0，等到截取数组的时候再更新index
  arr.forEach((v, i) => {
    if (v + 1 !== arr[i + 1]) {
      result.push(arr.slice(index, i + 1));
      index = i + 1;
    }
  });
  return result;
};

const arr = [2, 10, 3, 4, 5, 11, 10, 11, 20];

console.log(splitArr(deleteIndex(arr)));
