function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(`${this.name}${this.age}了`);
};

const xuzhen = new Person("xuzhen", 18);

// 实现一个new
// 1. 创建一个空对象，并指向构造函数的原型
// 2. 将空对象指向构造函数的this, 用构造函数内部方法修改空对象
// 3. 如果构造函数返回一个非基本类型的值，则返回这个值，否则返回空对象
function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

console.log(_new(Person, "xuzhen", "18"));
