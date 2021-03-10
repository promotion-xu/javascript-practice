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
  successCallback = undefined;
  // 保存后的失败回调
  failCallback = undefined;

  // 箭头函数内没有this指向，所以外面调用resolve('')
  resolve = value => {
    // 状态一旦被改变，就不可再次更改
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    // 如果有成功的回调
    this.successCallback && this.successCallback(value);
  };

  reject = reason => {
    // 状态一旦被改变，就不可再次更改
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    // 如果有失败的回调
    this.failCallback && this.failCallback(value);
  };

  then(successCallback, failCallback) {
    if (this.status === FULFILLED) {
      successCallback(this.value);
    } else if (this.status === REJECTED) {
      failCallback(this.reason);
    } else {
      this.successCallback = successCallback;
      this.failCallback = failCallback;
    }
  }
}

module.exports = myPromise;
