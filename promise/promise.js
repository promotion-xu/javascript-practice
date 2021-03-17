const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class myPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
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
    while (this.successCallback.length) this.successCallback.shift()();
  };

  reject = reason => {
    // 状态一旦被改变，就不可再次更改
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // 如果有失败的回调
    // this.failCallback && this.failCallback(value);
    while (this.failCallback.length) this.failCallback.shift()();
  };

  then(successCallback, failCallback) {
    let promise2 = new myPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          // 捕捉.then回调函数的错误，有错误就在下一个.then错误回调中执行
          try {
            let x = successCallback(this.value);
            // 判断x是普通值还是promise对象
            // 1. 是普通值则直接resolve
            // 2. 是promise对象，则判断是什么状态
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          // 捕捉.then回调函数的错误，有错误就在下一个.then错误回调中执行
          try {
            let x = failCallback(this.reason);
            // 判断x是普通值还是promise对象
            // 1. 是普通值则直接resolve
            // 2. 是promise对象，则判断是什么状态
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else {
        this.successCallback.push(() => {
          setTimeout(() => {
            // 捕捉.then回调函数的错误，有错误就在下一个.then错误回调中执行
            try {
              let x = successCallback(this.value);
              // 判断x是普通值还是promise对象
              // 1. 是普通值则直接resolve
              // 2. 是promise对象，则判断是什么状态
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            // 捕捉.then回调函数的错误，有错误就在下一个.then错误回调中执行
            try {
              let x = failCallback(this.reason);
              // 判断x是普通值还是promise对象
              // 1. 是普通值则直接resolve
              // 2. 是promise对象，则判断是什么状态
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError("not me"));
  }
  if (x instanceof myPromise) {
    // 是promise对象，调用.then 要判断它的状态
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

module.exports = myPromise;
