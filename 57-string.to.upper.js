// 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。

const str = "AbC";
const reverseUppString = (str) => {
  const arr = str.split("");
  const newArr = arr.map((v) =>
    v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()
  );
  return newArr.join("");
};

console.log(reverseUppString(str));
