/**
 * 1. promise是一个类,new Promise
 * 2. new Promise第一个参数是一个构造器，立即被执行
 * 3. promise 状态一旦被改变，就不可再次更改
 * 4. then 方法接受成功，失败的函数
 */

const myPromise = require("./promise");

const p1 = function() {
  return new myPromise(resolve => {
    setTimeout(() => {
      resolve("p1");
    }, 2000);
  });
};

const p2 = function() {
  return new myPromise(resolve => {
    resolve("p2");
  });
};

myPromise.all(["a", "b", p1(), p2(), "c"]).then(result => console.log(result));
