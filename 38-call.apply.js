// call 和 apply 的区别是什么，哪个性能更好一些

// Function.prototype.apply和Function.prototype.call 的作用是一样的，区别在于传入参数的不同；

// 1.第一个参数都是，指定函数体内this的指向；
// 2.第二个参数开始不同，apply是传入带下标的集合，数组或者类数组，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，都会传给函数作为参数。
// 3.call比apply的性能要好，平常可以多用call, call传入参数的格式正是内部所需要的格式

function Parent(name, age) {
  this.name = name;
  this.age = age;
}

function Children(...args) {
  Parent.call(this, ...args);
}

const c = new Children("21", 12);
console.log(c);
