var isPalindrome = function (x) {
  var num = x.toString();
  return x == num.split("").reverse().join("");
};

console.log(isPalindrome(123454321));
