// 执行环境及作用域

// 当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。作用域链的用途，是
// 保证对执行环境有权访问的所有变量和函数的有序访问

// var color = "blue";
// function changeColor() {
//   if (color === "blue") { // 先会在函数作用域找color, 找不到再向上一级。找到顶找不到就报错
//     color = "red";
//   } else {
//     color = "blue";
//   }
// }
// changeColor();
// console.log("Color is now " + color); // red

// var color = "blue";
// function changeColor() {
//   var anotherColor = "red";
//   function swapColors() {
//     var tempColor = anotherColor; // red
//     anotherColor = color; // blue
//     color = tempColor; // red
//     // 这里可以访问 color、anotherColor 和 tempColor
//   }
//   // 这里可以访问 color 和 anotherColor，但不能访问 tempColor
//   swapColors();
// }
// // 这里只能访问 color
// changeColor();
// console.log(color); // red
