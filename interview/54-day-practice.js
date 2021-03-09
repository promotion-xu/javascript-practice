function curry(fn) {
  const len = fn.length;
  return function currying(...args) {
    if (len === args.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return currying.apply(this, args.concat(args2));
    };
  };
}

function numFormat(num) {
  num = num.toString().split(".");
  const arr = num[0].split("").reverse();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      result.push(",");
    }
    result.push(arr[i]);
  }
  result = result.reverse().join("");
  if (num[1]) {
    result = result + "." + num[1];
  }
  return result;
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
    hasPathSum(root.left, target - root.val) ||
    hasPathSum(root.right, target - root.val)
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
      fn.apply(this, arguments);
      prev = now;
    }
  };
}

function debounce(fn, delay) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj === "object") return obj;
  let result = Array.isArray(obj) ? [] : {};
  for (let key in result) {
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
  const args = Array.prototype.slice.call(arguments, 1);
  const self = this;
  return function () {
    return self.apply(context, args.concat(arguments));
  };
};

function fib(n, prev = 1, next = 1) {
  if (n <= 2) return prev;
  return fib(n - 1, next, prev + next);
}

class EventEmits {
  constructor() {
    this.events = {};
  }
  on(eventType, fn) {
    if (this.events[eventType]) {
      this.events[eventType].push(fn);
    } else {
      this.events[eventType] = [fn];
    }
  }

  emit(eventType, ...values) {
    this.events.forEach((fn) => {
      fn.apply(this, values);
    });
  }

  remove(eventType) {
    delete this.events[eventType];
  }
}
