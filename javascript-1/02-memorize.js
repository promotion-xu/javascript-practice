const _ = require("lodash");

function getArea(r) {
  console.log(arguments);
  return Math.PI * r * r;
}

// momoize缓存纯函数计算的结果
// let getAreaWithMemorize = _.memoize(getArea);

// console.log(getAreaWithMemorize(4));
// console.log(getAreaWithMemorize(4));
// console.log(getAreaWithMemorize(4));

// 1.接收一个函数，返回这个函数。
// 2.对于相同的函数里的参数，缓存计算结果
const memoize = fn => {
  let cache = {};
  return function() {
    // arguments 就是调用memoize函数返回的函数 的参数
    // 以 arguments 作为参数缓存计算结果
    let key = JSON.stringify(arguments);
    cache[key] = cache[key] || fn.apply(fn, arguments);
    return cache[key];
  };
};

let getAreaWithMemorize = memoize(getArea);
console.log(getAreaWithMemorize(4));
console.log(getAreaWithMemorize(4));
console.log(getAreaWithMemorize(4));
