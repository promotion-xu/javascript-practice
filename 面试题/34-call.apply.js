Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    return;
  }
  context.fn = this;
  const args = Array.prototype.slice.call(arguments, 1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    return;
  }
  context.fn = this;
  const args = arguments[1];
  let result;
  if (arguments.length === 1) {
    result = context.fn();
  } else {
    result = context.fn(args);
  }
  delete context.fn;
  return result;
};

let obj = {
  name: "xz",
};

function fn(a, b) {
  console.log(this.name, a, b);
}

// fn.myCall(obj, 1, 2);
fn.myApply(obj, [1, 2]);
