// Input: 'aaaabbbccd'
// Output: 'a4b3c2d1'

const str = "aaaabbbccd"
const dict = {
  a: 4,
  b: 3,
  c: 2,
  d: 1
}
// function encode(str) {
//   const dict = {}
//   for (const s of str) {
//     dict[s] = (dict[s] || 0) + 1
//   }
//   let result = ''
//   Object.keys(dict).forEach(item => {
//     result += item + dict[item]
//   })
//   return result
// }
// console.log(encode(str)) // a4b3c2d1

// 如果只出现一次， 则 a4b3c2d

function encode(str) {
  const dict = {}
  for (const s of str) {
    dict[s] = (dict[s] || 0) + 1
  }
  let result = ''
  Object.keys(dict).forEach(item => {
    if (dict[item] === 1) dict[item] = ''
    result += item + dict[item]
  })
  return result 
}

console.log(encode(str))