var HeadClass = function () {};

function head() {
  // 匿名自执行函数
  var instance; // 声明一个instance对象
  return function () {
    if (instance) {
      // 如果已存在 则返回instance
      return instance;
    }
    instance = new HeadClass(); // 如果不存在 则new一个HeadClass对象
    return instance;
  };
}

let Head = head();

var a = new Head();
var b = new Head();
console.log(a === b); //
