// Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol

// symbol 表示独一无二的值，不能被Object.keys 和 for...of 枚举，可当做私有变量使用

let mySymbol = Symbol("xz");

let a = {};

a[mySymbol] = "Hello";

let a = {
  [mySymbol]: "Hello!",
};
