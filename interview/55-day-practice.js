function curry(fn) {
  const len = fn.length;
  return function currying(...args) {
    if (len === args.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
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

function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
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
    this.events[eventType].forEach(fn => {
      fn.apply(this, values);
    });
  }

  remove(eventType) {
    delete this.events[eventType];
  }
}
