
const arr = [3, 1, 5, 4]

//随机洗牌函数
const shuffle = (list) => list.sort((x, y) => Math.random() - 0.5)

console.log(shuffle(arr))