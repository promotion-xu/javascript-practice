// 手写bind方法

// let a = 1;
// let obj = {
//   name: "xz",
// };

// function fn() {
//   console.log(this.name);
// }

// let newFn = fn.bind(obj);

// newFn();

// 调用的形式是 fn.bind

Function.prototype.bind = function (context) {
  if (typeof this !== "function") {
    throw Error("调用者必须是函数");
  }
  let self = this;

  let arg = Array.prototype.slice.call(arguments, 1);

  return function () {
    return self.apply(context, arg.concat(arguments));
  };
};

let a = 1;
let obj = {
  name: "xz",
};

function fn(a) {
  console.log(this.name, a);
}
let newFn = fn.bind(obj, 1);

newFn();
