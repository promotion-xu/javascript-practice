let str = "abcdef";

//字符串两两交换 => 'badcfe'

function exchange(str) {
  if (str.length % 2 !== 0) return str;
  let odd = [];
  let even = [];
  let result = "";
  for (let i = 0, len = str.length; i < len; i++) {
    if (i % 2 === 0) {
      // 偶数位
      even.push(str[i]);
    } else {
      // 奇数位
      odd.push(str[i]);
    }
  }
  odd.forEach((v, i) => {
    result += v + even[i];
  });
  return result;
}

console.log(exchange(str));
