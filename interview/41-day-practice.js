function curry(fn) {
  const len = fn.length;
  return function currying(...args) {
    if (len === args.length) {
      return fn.apply(null, args);
    }
    return function (...args2) {
      return currying.apply(null, [...args, ...args2]);
    };
  };
}

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  const length = arr.length;
  if (length <= 1) return arr;
  const midIndex = Math.floor(length / 2);
  const midValue = arr[midIndex];
  const left = [];
  const right = [];
  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      if (arr[i] < midValue) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSort(left).concat([midValue], quickSort(right));
}

Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw Error("...");
  }
  const args = Array.prototype.slice.call(arguments, 1);
  const self = this;
  return function () {
    self.apply(context, args);
  };
};

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw Error("...");
  }
  context.fn = this;
  const result = context.fn(arguments[1] ? arguments[1] : undefined);
  delete context.fn;
  return result;
};

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw Error("...");
  }
  const args = Array.prototype.slice.call(arguments, 1);
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

// 节流
function throttle(fn, wait) {
  let prev = 0;
  return function () {
    let now = Date.now();
    if (now - prev > wait) {
      fn.apply(null, arguments);
      prev = now;
    }
  };
}

// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(null, arguments);
    }, delay);
  };
}

function fib(n, prev = 1, next = 1) {
  if (n <= 2) return prev;
  return fib(n - 1, next, prev + next);
}

function hasPathSum(root, target) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return target === root.val;
  }
  return (
    hasPathSum(root.left, target - root.val) ||
    hasPathSum(root.right, target - root.val)
  );
}

function Person(name) {
  this.name = name;
}
let p = new Person("xz");

function _new(fn, ...args) {
  let obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}
console.log(_new(Person, "xz"));
