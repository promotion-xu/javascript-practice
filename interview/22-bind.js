Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw Error("caller is not a function");
  }
  let self = this; // 调用的函数
  let arg = Array.prototype.slice.call(arguments, 1); // 获取bind后除去绑定this的参数

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
let newFn = fn.myBind(obj, 1);

newFn(123);
