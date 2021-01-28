// 实现call, apply

let obj = {
  name: "xz",
};

function fn() {
  console.log(this.name);
}

// fn.call(obj);

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw Error("caller must be a function");
  }

  context = context || window;
  context.fn = this;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

fn.apply(obj);
