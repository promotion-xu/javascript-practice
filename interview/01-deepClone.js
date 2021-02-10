let obj = {
  name: "xz",
  o: {
    age: 1
  },
  arr: [1, 2, 3, 4]
};

function deepClone(obj) {
  if (typeof obj === null) return null;
  if (typeof obj !== "object") return obj;
  let result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return result;
}

let newObj = deepClone(obj);
newObj.o.age = 2;
newObj.arr[0] = 2;
console.log(obj);
