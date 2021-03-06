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
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
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
    return self.apply(context, args.concat[arguments]);
  };
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

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw Error("...");
  }
  const args = Array.prototype.slice.call(arguments, 1);
  context.fn = this;
  const result = context.fn(arguments[1] ? arguments[1] : null);
  delete context.fn;
  return result;
};

function throttle(fn, wait) {
  let prev = 0;
  return function (...args) {
    let now = Date.now();
    if (now - prev > wait) {
      fn.apply(null, args);
      prev = now;
    }
  };
}

function debounce(fn, delay) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(null, arguments);
    }, delay);
  };
}

function hasPathSum(root, target) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val === target;
  }
  return (
    arguments.callee(root.left, target - root.val) ||
    arguments.callee(root.right, target - root.val)
  );
}

const flatten = (arr) => {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur instanceof Array ? flatten(cur) : cur);
  }, []);
};

function fib(n, prev = 1, next = 1) {
  if (n <= 2) return prev;
  return fib(n - 1, next, prev + next);
}

function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}
