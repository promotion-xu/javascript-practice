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
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

function quickSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  const midIndex = Math.floor(len / 2);
  const midValue = arr[midIndex];
  const left = [];
  const right = [];
  for (let i = 0; i < len; i++) {
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
    return self.apply(context, args.concat(arguments));
  };
};

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw Error("...");
  }
  context.fn = this;
  const result = context.fn(arguments[1] ? arguments[1] : null);
  delete context.fn;
  return result;
};

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw Error("...");
  }
  context.fn = this;
  const result = context.fn();
  delete context.fn;
  return result;
};

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

function debounce(fn, delay) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(null, arguments);
    }, delay);
  };
}

function fib(n, prev = 1, next = 1) {
  if (n <= 2) return prev;
  return arguments.callee(n - 1, next, prev + next);
}

function flatten(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur instanceof Array ? flatten(cur) : cur);
  }, []);
}

function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function hasPathSum(root, target) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return target === root.val;
  }
  return (
    arguments.callee(root.left, target - root.val) ||
    arguments.callee(root.right, target - root.val)
  );
}
