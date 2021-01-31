class Jquery {
  constructor(selector) {
    const elements = document.querySelectorAll(selector);
    const length = elements.length;
    for (let i = 0; i < length; i++) {
      this[i] = elements[i];
    }
    this.length = length;
    this.selector = selector;
  }

  get(index) {
    return this[index];
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      fn(element);
    }
  }
  on(type, fn) {
    return this.each(ele => {
      ele.addEventListener(type, fn, false);
    });
  }
}

Jquery.prototype.dialog = info => {
  alert(info);
};

// 早轮子

class MyJQuery extends Jquery {
  constructor(selector) {
    super(selector);
  }
  addClass(className) {}
}
