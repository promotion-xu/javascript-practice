// 某公司 1 到 12 月份的销售额存在一个对象里面

// 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：
// [222, 123, null, null, 888, null, null, null, null, null, null, null]。
const obj = { 1: 222, 2: 123, 5: 888 };
const transformToArr = (obj) => {
  let result = [];
  let keys = [];
  for (let i = 1; i < 13; i++) {
    keys.push(String(i));
  }
  // keys 为 ["1", "2", "3", ..., "12"]
  keys.forEach((v) => {
    result[v - 1] = obj[v] || null; // v-1，是因为数组下标比月份少1
  });
  return result;
};

console.log(transformToArr(obj));
