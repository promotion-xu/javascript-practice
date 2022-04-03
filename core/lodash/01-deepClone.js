

const obj = {
  a: 1,
  b: {
    c: 1
  }
}

function deepClone(obj) {
  if (typeof obj === null) return null;
  if (typeof obj !== "object") return obj;
  let result = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return result;
}

const o = deepClone(obj)
o.b.c = 2
console.log(obj)