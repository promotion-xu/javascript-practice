//  至少可以说出三种判断 JavaScript 数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

// 1. typeof 只能判断基本类型数据(typeof null --> object)。复杂类型数据返回都是object

// 2. Object.prototype.toString.call(), 可以准确判断数据类型 '[object, Number]'

// 3. instanceof 检测constructor.prototype 是否存在于object的原型链上,是则返回true, 否则返回false
// console.log([1] instanceof Array) // true
// 只能用来判断两个对象是否属于实例关系，而不能判断 一个对象实例具体属于哪种类型

// 4. constructor

console.log([].constructor === Object); // true
console.log(null.constructor); // undefined
