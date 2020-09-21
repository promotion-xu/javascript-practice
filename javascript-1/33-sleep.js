// 实现sleep函数

// 比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("111");
    }, time);
  });
}

sleep(2000).then((res) => {
  console.log("res", res);
});
