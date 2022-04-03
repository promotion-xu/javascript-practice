


// n 秒后执行最后一次的请求

function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(null, arguments)
    }, delay)
  }
}

const test = i => console.log(`test-----${i}`)
const debounced = debounce(test, 1000)

for(let i = 0; i < 10; i++) {
  debounced(i)
}