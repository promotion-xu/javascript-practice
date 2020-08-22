// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b);
// })();

// 声明提前：一个声明在函数体内都是可见的，函数声明优先于变量声明；
// 在非匿名自执行函数中，函数变量为只读状态无法修改

// function b() {}

// 改造代码使之分别打印10 、 20

// 1.   20
// var b = 10;
// (function b() {
//   var b = 20;
//   console.log(b);
// })();

// // 2.   10

// var b = 10;
// (function (b){
//   console.log(b)
//   var b = 20
// })()
