function curry(fn) {
  const len = fn.length;
  return function currying(...args) {
    if (len === args.length) {
      return fn.apply(null, args);
    }
    return function (...args2) {
      return currying.apply(null, args.concat(args2));
    };
  };
}

function numFormat(num) {
  num = num.toString().split(".");
  const arr = num[1].split("").reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      res.push(",");
    }
    res.push(arr[i]);
  }
  res = res.reverse();
  if (num[1]) {
    res = res.join("") + "." + num[1];
  } else {
    res = res.join("");
  }
  return res;
}

function trim(str) {
  return str.replace(/^\s+/, "").replace(/\s+$/, "");
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

function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function throttle(fn, wait) {
  let prev = 0;
  return function () {
    const now = Date.now();
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
      fn.apply(this, arguments);
    }, delay);
  };
}

function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return result;
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
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return self.apply(context, args.concat(arguments));
  };
};

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw Error("...");
  }
  context.fn = this;
  const args = Array.prototype.slice.call(arguments, 1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
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

function fib(n, prev = 1, next = 1) {
  if (n <= 2) return prev;
  return fib(n - 1, next, prev);
}

function flatten(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur instanceof Array ? flatten(cur) : cur);
  }, []);
}
