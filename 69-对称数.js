// 打印出 1 - 10000 之间的所有对称数

// 例如：121、1331 等

const logSymmetry = () => {
  let result = [];
  for (let i = 0; i < 10000; i++) {
    let str = String(i);
    let reverse = str.split("").reverse().join("");
    if (str === reverse) {
      result.push(i);
    }
  }
  return result;
};

console.log(logSymmetry());
