function numFormat(num) {
  num = num.toString().split(".");
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
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
}

// console.log(numFormat(123456789.234)); // 123,456,789.234
// console.log(numFormat(23456789.234)); // 123,456,789.234

function trim(str) {
  return str.replace(/^\s+/, "").replace(/\s+$/, "");
}

// console.log(trim(" s af fdsf  "));

function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  const result = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return result;
}

// console.log(deepClone(null));
// console.log(deepClone({ name: "xz" }));
// console.log(deepClone(1));
// console.log(deepClone(function a() {}));
