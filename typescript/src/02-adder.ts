type Adder = (a: number, b: number) => number;
const add: Adder = (a, b) => a + b;

let str: "this is string" = "this is string";
let s: string = "any string";

let goodIndex: number | null = null;

function setGoodIndex(this: any, index: number) {
  console.log(this);
  goodIndex = index;
}
// this会被转化
// function setGoodIndex(index) {
//   console.log(this);
//   goodIndex = index;
// }
setGoodIndex(2);
setGoodIndex(2);

let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
