// 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置

const originStr = "xz";
const targetStr = "asfhuixzsjdhfio";
const searchIndex = (S, T) => {
  if (S.length < T.length) return -1;
  for (let i = 0; i < S.length; i++) {
    if (S.slice(i, i + T.length) === T) {
      return i;
    }
  }
  return -1;
};
console.log(searchIndex(targetStr, originStr));
