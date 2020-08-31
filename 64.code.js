// 对象的键名只能是字符串和 Symbol 类型。
// 其他类型的键名会被转换成字符串类型。
// 对象转字符串默认会调用 toString 方法。

// // example 1
// var a = {},
//   b = "123",
//   c = 123;
// a[b] = "b"; // a: { '123': 'c' }
// a[c] = "c"; // obj 都是以字符串进行存储的
// console.log(a[b]); // c

// ---------------------
// // example 2
// var a = {},
//   b = Symbol("123"),
//   c = Symbol("123");
// b 是Symbol, c也是Symbol, 不会被覆盖
// a[b] = "b"; // a: { Symbol.b('123'): 'b' }
// a[c] = "c"; // a: { Symbol.b('123'): 'b', Symbol.c('123'): 'c' }
// console.log(a[b]);  // b

// ---------------------
// // example 3
var a = {},
  b = { key: "123" },
  c = { key: "456" };
// b不是字符串，也不是Symbol, 需要调用toString方法， 就变成[object Object]
a[b] = "b";
// 这里c调用toString 后就变成了 [object Object] 会覆盖之前的
a[c] = "c";
console.log(a[b]); // c
