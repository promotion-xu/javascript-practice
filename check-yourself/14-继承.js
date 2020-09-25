// 1. 原型链继承

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.say = function () {
//   console.log(`${this.name} say something`);
// };

// const p = new Person("xuzhen");
// console.log(p.say());

// 2. call, apply 构造函数继承
// 优点：可以传参，支持定制化
// 缺点：没有一个完成的原型链，父类的构造方法只是在子类实例化时运行一次

// function Animate(name) {
//   this.name = name;
// }

// function Person(name, age) {
//   Animate.call(this, name);
//   this.age = age;
// }

// const p = new Person("xz", 12);
// console.log(p);

// 3. class 类继承

// class Animate {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Person extends Animate {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// const p = new Person("xz", 13);
// console.log(p);

// 4. 类继承
// 缺点：子类继承父类的实例，这是无差别继承。可能会继承到不想要的属性，不能根据实际情况向父类传参

// function Parent(values) {
//   this.values = values;
//   this.fn = function () {
//     console.log("fn");
//   };
// }

// function Children(value) {
//   this.subValue = value;
// }

// Children.prototype = new Parent("parent values");

// const c = new Children("child value");

// console.log(c.values);

// 5. 组合 继承

// function Animate(name) {
//   this.name = name;
// }

// function Person(name, age) {
//   Animate.call(this, name);
//   this.age = age;
// }

// Person.prototype = new Animate("Animate");

// let instance = new Person("animate", 17);

// console.log(instance);

// Person.prototype 仍然是父类的实例

// 6. 原型式继承
// let obj = {
//   name: "xz",
//   fn: function () {
//     this.name = name;
//   },
// };
// // 将类与构造函数的关系隐藏起来
// function Factory(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// let instance = Factory(obj);
// console.log(instance);

// 7. 寄生式继承

let obj = {
  name: "xz",
  func: function () {
    console.log(`${this.name} said sth`);
  },
};

function inheritPrototype(obj, value) {
  let subObj = Object.create(obj);
  subObj.name = value;
  subObj.say = function () {
    console.log("say sth");
  };
  return subObj;
}

let Instance = inheritPrototype(obj, "xuzhen");
Instance.func();
Instance.say();
