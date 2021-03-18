function curry(fn) {
  const len = fn.length;
  return function currying(...args) {
    if ((args.length = len)) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return currying(this, args.concat(args2));
    };
  };
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

Promise.prototype.myAll = function (arr) {
  if (Object.prototype.toString.call(arr) !== "[object, Array]") {
    throw Error("...");
  }
  const len = arr.length;
  let index = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    function addData(key, value) {
      result[key] = value;
      index++;
      if (index === len) {
        resolve(result);
      }
    }
    for (let i = 0; i < len; i++) {
      const current = arr[i];
      if (current instanceof Promise) {
        current.then((value) => addData(i, value), reject);
      } else {
        addData(i, current);
      }
    }
  });
};

p.finally(() => {});

Promise.prototype.myFinally = function (callback) {
  return this.then(
    (value) => Promise.resolve(callback()).then(() => value),
    (reason) =>
      Promise.resolve(callback()).then(() => {
        throw reason;
      })
  );
};
