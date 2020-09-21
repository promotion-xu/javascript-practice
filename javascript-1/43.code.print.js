var a = { n: 1 };
var b = a; // b, a 指向同一个地址
// 下面a赋值了一个新对象 {n: 2}
a.x = a = { n: 2 };
// 这里的a.x就是修改之前的地址的值

console.log(a);
console.log(b);
