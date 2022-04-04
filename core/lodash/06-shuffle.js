// 题目: 【Q447】如何实现一个数组洗牌函数 shuffle
// 相关: 【Q645】随机生成六位数的手机验证码(重复/不可重复)
// 代码: 【Q447】如何实现一个数组洗牌函数 shuffle
// 对于实现一个简单的 shuffle，可能极其简单。


const arr = [3, 1, 5, 4]

//随机洗牌函数
const shuffle = (list) => list.sort((x, y) => Math.random() - 0.5)

console.log(shuffle(arr))