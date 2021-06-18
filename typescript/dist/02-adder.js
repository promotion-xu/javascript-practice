var add = function (a, b) { return a + b; };
var str = "this is string";
var s = "any string";
var goodIndex = null;
function setGoodIndex(index) {
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
