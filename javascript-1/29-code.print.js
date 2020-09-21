// 下面代码中 a 在什么情况下会打印 1？

// 因为==会进行隐式类型转换 所以我们重写toString方法就可以了
let a = {
  i: 1,
  toString() {
    return a.i++;
  }
};
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}
