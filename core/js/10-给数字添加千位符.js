function numFormat(num) {
  num = num.toString().split("."); // [123456789, 123456678]
  const arr = num[0].split("").reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      res.push(",");
    }
    res.push(arr[i]);
  }
  res.reverse();
  if (num[1]) {
    res = res.join("") + "." + num[1];
  } else {
    res = res.join("");
  }
  return res;
}

console.log(numFormat(123456789.12345678))