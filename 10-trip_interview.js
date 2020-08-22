let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
//编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

const flatten = (arr) => {
  let result = [];
  fla(arr);
  function fla(arr) {
    arr.forEach((v) => {
      if (Array.isArray(v)) {
        fla(v);
      } else {
        result.push(v);
      }
    });
  }
  return result;
};

// (1).去重
const deduplication = (arr) => {
  return [...new Set([...arr])];
};
// (2).去重
const filter = (arr) => {
  let result = [];
  arr.forEach((v) => {
    if (result.indexOf(v) < 0) {
      result.push(v);
    }
  });
  return result;
};

// 1.扁平化
const a = flatten(arr);
// 2. 去重
const b = filter(a);
// 3. 升序
const result = b.sort((a, b) => {
  return a - b;
});
console.log("result", result);
