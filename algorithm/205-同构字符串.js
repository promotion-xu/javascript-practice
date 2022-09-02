var isIsomorphic = function(s, t) {
  // s: b a d
  // t: b a b

  let s2t = {}, t2s = {};

  for (let i = 0; i < s.length; i ++) {
    let x = s[i], y = t[i];
    // 没有就赋值
    if (!s2t[x]) s2t[x] = y;
    // 有，就判断下原有的值跟要赋值的值是否相等
    if (s2t[x] !== y) return false;

    if (!t2s[y]) t2s[y] = x;
    if (t2s[y] !== x) return false;
    return true;
  }


  return true
};


var str1 = "bad"
var str2 = "bab"

console.log(isIsomorphic(str1, str2))