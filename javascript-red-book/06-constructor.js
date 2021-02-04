// 构造函数

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// let p = new Person("xz", 1);

// console.log(p);

/*
 * this
 * 1. 创建一个空对象
 * 2. 将this指向这个空对象
 * 3. 赋值操作
 * 4. 构造函数返回一个非基本类型的值，则返回这个值，否则返回空对象
 * */

// 实现一个new

function _new(fn, ...args) {
  let obj = Object.create(fn.prototype);

  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

console.log(_new(Person, "xz", 18));
