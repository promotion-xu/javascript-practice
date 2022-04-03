
// n 秒内只执行一次
function throttle(fn, wait) {
  let lastTime = 0
  return function () {
    const now = Date.now()
    if (now - lastTime > wait) {
      fn.apply(null, arguments)
      lastTime = now
    }
  }
}

const test = i => console.log(`test+${i}`)

const throttled = throttle(test, 1000)

for(let i = 0; i < 10; i ++) {
  throttled(i)
}