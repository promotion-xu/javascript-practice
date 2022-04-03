

const str = 'asdfdgfhjhkassaaaaa'

// function maxChar(str) {
//   const dict = {}
//   for (const s of str) {
//     dict[s] = (dict[s] || 0) + 1
//   }
//   let max = ['', 0]
//   Object.keys(dict).forEach(item => {
//     if (dict[item] > max[1]) {
//       max = [item , dict[item]]
//     }
//   })
//   return max
// }
// console.log(maxChar(str))

function maxChar(str) {
  const dict = {}
  let maxChar = ['', 0]
  for (const s of str) {
    dict[s] = (dict[s] || 0) + 1;
    if (dict[s] > maxChar[1]) {
      maxChar = [s, dict[s]]
    }
  }
  return maxChar
}

console.log(maxChar(str))