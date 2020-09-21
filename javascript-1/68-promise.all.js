// Promise.all 使用，远离实现，错误处理

// const p1 = request(`http://some.url.1`)
// const p2 = request(`http://some.url.2`)
// Promise.all([p1, p2])
//   .then((datas) => { // 此处 datas 为调用 p1, p2 后的结果的数组
//     return request(`http://some.url.3?a=${datas[0]}&b=${datas[1]}`)
//   })
//   .then((data) => {
//     console.log(msg)
//   })
