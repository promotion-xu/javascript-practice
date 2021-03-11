function curry(fn) {
  const len = fn.length;
  return function currying(...args) {
    if (len === args.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return currying.apply(this, args.concat(arg2));
    };
  };
}

function numFormat(num) {
  num = num.toString().split("");
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

function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

// 节流
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

// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
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
  context.fn = this;
  const args = Array.prototype.slice.call(arguments, 1);
  const result = context.fn(args);
  delete context.fn;
  return result;
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
    this.events[eventType].forEach((fn) => {
      fn.apply(this, values);
    });
  }

  remove(eventType) {
    delete this.events[eventType];
  }
}
