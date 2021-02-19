// 1
// case:
// 1. 输入 3 + 2 + 1
// 输出 5
// 2. 输入 5 - 1
// 输出 4
// 3. 输入 3 / 0
// 抛出错误

// function caculator(input) {
//   // 请实现计算器逻辑
//   const obj = {
//     plus: /\+/g,
//     minus: /-/g,
//     multiple: /\*/g,
//     divide: /\//g,
//   };
//   const way = Object.keys(obj).find((v) => obj[v].test(input));
//   let result;
//   switch (way) {
//     case "plus":
//       result = input
//         .split("+")
//         .map(Number)
//         .reduce((prev, cur) => prev + cur);
//       break;
//     case "minus":
//       result = input
//         .split("-")
//         .map(Number)
//         .reduce((prev, cur) => prev - cur);
//       break;
//     case "multiple":
//       result = input
//         .split("*")
//         .map(Number)
//         .reduce((prev, cur) => prev * cur);
//       break;
//     case "divide":
//       result = input
//         .split("/")
//         .map(Number)
//         .reduce((prev, cur) => {
//           if (cur === 0) {
//             throw Error("can not");
//           }
//           return prev / cur;
//         });
//       break;
//   }
//   return result;
// }
// console.log(caculator("5 - 1"));
// console.log(caculator("5 / 1"));
// console.log(caculator("5 * 3"));

// 2.
const m1 = async (data, next) => {
  console.log(1);
  data.a++;
  await next();
  console.log(5);
  console.log(data);
};
const m2 = async (data, next) => {
  console.log(2);
  data.a++;
  await next();
  console.log(4);
};
const m3 = async (data, next) => {
  console.log(3);
  data.a++;
  await next();
};
function fn() {}
function onion(items) {
  // 实现洋葱圈可以达到如下效果

  // 需要返回一个函数，可供再次执行
  return function (obj) {
    // 遍历这个数组函数，分别执行
    for (let i = 0, len = items.length; i < len; i++) {
      items[i](obj, fn);
    }
  };
}
// onion([m1, m2, m3])({ a: 0 });
// => 1
// => 2
// => 3
// => 4
// => 5
// => {a: 3}
onion([m3, m2, m1])({ a: 0 });
// => 3
// => 2
// => 1
// => 5
// => {a: 3}
// => 4
