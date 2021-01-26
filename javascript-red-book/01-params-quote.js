// 基本类型值的传递如同基本类型变量的复制一样，而
// 引用类型值的传递，则如同引用类型变量的复制一样。有不少开发人员在这一点上可能会感到困惑，因
// 为访问变量有按值和按引用两种方式，而参数只能按值传递
// function addTen(num) {
//   num += 10;
//   return num;
// }
// let count = 10;
// let result = addTen(count);
// console.log(result); // 20
// console.log(count); // 10

// 即使这个变量是按值传递的，obj 会按引用来访问同一个对象
// function setName(obj) {
//   obj.name = "Nicholas";
// }
// var person = new Object();
// setName(person);
// console.log(person.name);

// 在把 person 传递给
// setName()后，其 name 属性被设置为"Nicholas"。然后，又将一个新对象赋给变量 obj，同时将其 name
// 属性设置为"Greg"。如果 person 是按引用传递的，那么 person 就会自动被修改为指向其 name 属性值
// 为"Greg"的新对象。但是，当接下来再访问 person.name 时，显示的值仍然是"Nicholas"。这说明
// 即使在函数内部修改了参数的值，但原始的引用仍然保持未变。实际上，当在函数内部重写 obj 时，这
// 个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。
function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}
var person = new Object();
setName(person);
console.log(person.name);
// 可以把 ECMAScript 函数的参数想象成局部变量。
