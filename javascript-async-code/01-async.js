console.log("start");

// 宏任务会放在任务队列的最后
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// 微任务会在当前任务执行完成后立即执行
Promise.resolve("123")
  .then(value => console.log("promise"))
  .then(value => console.log("promise1"));

console.log("end");
