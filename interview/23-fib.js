// 1, 1, 2, 3, 5, 8...
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// 优化斐波那契数列

function fib(n, prev = 1, next = 1) {
  if (n <= 1) return prev;
  return fib(n - 1, next, next + prev);
}

console.log(fib(1200));
