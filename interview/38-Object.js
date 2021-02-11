let obj = {
  name: "xz"
};

let obj1 = new Object(obj);

// console.log(obj === obj1);

let obj2 = Object.create(null); // 创建一个没有原型的空对象

let obj3 = Object.create(obj); // 创建一个空对象，原型指向第一个参数
console.log(obj3.name);
