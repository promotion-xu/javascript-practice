// 如果变量是给定引用类型（根据它的原型链来识别；第 6 章将介绍原型链）的实例，那么
// instanceof 操作符就会返回 true。请看下面的例子：

// 当然，如果使用 instanceof 操作符检测基本类型的
// 值，则该操作符始终会返回 false，因为基本类型不是对象
// console.log(1 instanceof Object); // false

// console.log("1" instanceof Object); /// false

// 所有引用类型的值都是 Object 的实例。因此，在检测一个引用类型值和 Object 构造
// 函数时，instanceof 操作符始终会返回 true。

// console.log(Array instanceof Object); // true
// console.log(Function instanceof Object); //true
// console.log(RegExp instanceof Object); // true

console.log([] instanceof Array);
console.log(Array.isArray([]));
