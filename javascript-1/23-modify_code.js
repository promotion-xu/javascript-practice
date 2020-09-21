// 改造下面代码，使他输出0-9
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // console.log("当前下标" + i);
  }, 0);
}

// 造成上述代码原因是，setTimeout 是异步代码，会放入宏任务队列，等到同步代码执行完毕，才会执行

// 1. 通过立即执行函数，保存每一次遍历的i
// 相当于生成了 10个立即执行函数
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}

// 2. 使用let 生成 块级作用域
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
