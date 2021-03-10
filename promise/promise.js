const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class myPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  status = PENDING;
  // 成功后的值
  value = undefined;
  // 失败后的原因
  reason = undefined;

  // 保存后的成功回调
  successCallback = [];
  // 保存后的失败回调
  failCallback = [];

  // 箭头函数内没有this指向，所以外面调用resolve('')
  resolve = value => {
    // 状态一旦被改变，就不可再次更改
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    // 如果有成功的回调
    // this.successCallback && this.successCallback(value);
    while (this.successCallback.length) this.successCallback.shift()(value);
  };

  reject = reason => {
    // 状态一旦被改变，就不可再次更改
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // 如果有失败的回调
    // this.failCallback && this.failCallback(value);
    while (this.failCallback.length) this.failCallback.shift()(value);
  };

  then(successCallback, failCallback) {
    let promise2 = new myPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        let x = successCallback(this.value);
        // 判断x是普通值还是promise对象
        // 1. 是普通值则直接resolve
        // 2. 是promise对象，则判断是什么状态
        resolvePromise(x, resolve, reject);
      } else if (this.status === REJECTED) {
        failCallback(this.reason);
      } else {
        this.successCallback.push(successCallback);
        this.failCallback.push(failCallback);
      }
    });

    return promise2;
  }
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof myPromise) {
    // 是promise对象，调用.then 要判断它的状态
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

module.exports = myPromise;
