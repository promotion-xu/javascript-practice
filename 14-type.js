// 1. Object.prototype.toString.call()
// 2. instanceof
// 3. Array.isArray()

const an = ["Hello", "an"];

// 1
// console.log(Object.prototype.toString.call("An"));
// console.log(Object.prototype.toString.call(11));
// console.log(Object.prototype.toString.call([]));
// console.log(Object.prototype.toString.call({}));
// console.log(Object.prototype.toString.call(null));
// console.log(Object.prototype.toString.call(undefined));
// console.log(Object.prototype.toString.call(Symbol("1")));

// 3
// console.log(Array.isArray(an));
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));
// console.log(Array.isArray(1));

// 2
// instanceof 通过判断对象的原型链中是不是能找到类型的prototype
// console.log([] instanceof Array);

// console.log([] instanceof Object);
