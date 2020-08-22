// 浏览器Event Loop 和 Node Event Loop 区别

const { endOfDay } = require("date-fns");

function test() {
  console.log("start");
  setTimeout(() => {
    console.log("children2");
    Promise.resolve().then(() => {
      console.log("children2-1");
    });
  }, 0);
  setTimeout(() => {
    console.log("children3");
    Promise.resolve().then(() => {
      console.log("children3-1");
    });
  }, 0);
  Promise.resolve().then(() => {
    console.log("children1");
  });
  console.log("end");
}

test();

// node 11 以下版本的执行结果（先执行所有宏任务,再执行微任务）
// start
// end
// children1
// children2
// children3
// children2-1
// children3-1

// node11 及浏览器的执行结果（顺序执行宏任务和微任务）
// start
// end
// children1
// children2
// children2-1
// children3
// children3-1
