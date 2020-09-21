// 百度）实现
// (5).add(3).minus(2) 功能。
// 例： 5 + 3 - 2，结果为 6

Number.prototype.add = function (value) {
  return this + value;
};

Number.prototype.minus = function (value) {
  return this - value;
};
const a = (5).add(3).minus(2);
console.log(a);
