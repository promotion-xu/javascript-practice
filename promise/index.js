/**
 * 1. promise是一个类,new Promise
 * 2. new Promise第一个参数是一个构造器，立即被执行
 * 3. promise 状态一旦被改变，就不可再次更改
 * 4. then 方法接受成功，失败的函数
 */

const myPromise = require("./promise");

let p = new myPromise((resolve, reject) => {
  resolve("成功");
});

p.then(
  value => {
    console.log(1);
    console.log(value);
  },
  reason => {
    console.log(reason);
  }
);
p.then(
  value => {
    console.log(2);
    console.log(value);
  },
  reason => {
    console.log(reason);
  }
);
p.then(
  value => {
    console.log(3);
    console.log(value);
  },
  reason => {
    console.log(reason);
  }
);