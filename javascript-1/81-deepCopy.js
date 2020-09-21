// 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

let obj = {
  a: {
    c: {
      name: "1",
    },
  },
  b: {},
};

const deepCopy = (obj) => {
  let res = {};
  const type = Object.prototype.toString.call(obj);
  if (type === "[object Object]") {
    for (item in obj) {
      res[item] =
        typeof obj[item] === "object" ? deepCopy(obj[item]) : obj[item];
    }
  } else if (type === "[object Array]") {
    let res = null;
    obj.forEach((item, index) => {
      res[index] = deepCopy(item);
    });
  } else {
    res = obj;
  }
  return res;
};

console.log(deepCopy(obj));
