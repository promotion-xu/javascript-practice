// for 循环没有任何额外的函数调用栈和上下文；

// forEach函数签名实际上是

// array.forEach(function(currentValue, index, arr), thisValue)

// 它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能；
