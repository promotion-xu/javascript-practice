var obj1 = {
  x1: 1,
  x2: { x: 1, y: 1 }
};

var obj2 = {
  x1: 1,
  x2: { x: 2, y: 1 }
};

function isObject(obj) {
  return typeof obj === "object" && typeof obj !== null;
}

function isEqual(obj1, obj2) {
  // 是否是对象
  if (!isObject(obj1) || !isObject(obj2)) {
    // 有一个不是对象就进行值比较
    return obj1 === obj2;
  }
  if (obj1 === obj2) return true;
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  // 以obj1为基准，和obj2依次递归比较
  for (const key in obj1) {
    const res = isEqual(obj1[key], obj2[key]);
    if (!res) return false;
  }
  return true;
}

console.log(isEqual(obj1, obj2));
