


// 1,1,2,3,5,8,13.........n
// -----------100----------

// function fib(n) {
//     if (n <= 2) return 1
//     return fib(n-1) + fib(n-2)
// }

// 问题：1.重复计算 2. 会创建过多的堆栈，而不会被回收

// console.log(fib(100))


// let fib = (function () {
//     let memo = new Map()
//     return function(n) {
//         const memorized = memo.get(n)
//         if (memorized) return memorized
//         if (n <= 2) return 1
//         let f1 = fib(n - 1)
//         let f2 = fib(n - 2)
//         memo.set(n-1, f1)
//         memo.set(n-2, f2)
//         return f1 + f2
//     }
// })()

// console.log(fib(50))



// 将数值保存在dp数组里
// function fib(n) {
//     let dp = []
//     dp[0] = 0
//     dp[1] = 1
//     dp[2] = 1

//     for (let i = 3; i <= n; i ++) {
//         dp[i] = dp[i-1] + dp[i-2]
//     }
//     return dp[n]
// }

// console.log(fib(1000))




// 什么是尾调用（函数式编程的一个重要概念）
// 一句话，就是指某个函数的最后一步是调用另一个函数。

// 如果在函数A的内部调用函数B, 那么在A的调用帧上方，还会形成一个B的调用帧。
// 等到B运行结束，将结果返回到A，B的调用帧才会销毁

// 一个调用栈中如果保存了大量的栈帧，调用栈非常长，消耗了巨大的内存，
// 会导致爆栈（栈溢出，stack overflow）。后入先出的结构。
// 0, 1, 1, 2, 3, 5, 8
function fib(n, current = 0, next = 1) {
    if (n === 0) return 0
    if (n === 1) return next;
    return fib(n - 1, next, current + next)
}

console.log(fib(100))