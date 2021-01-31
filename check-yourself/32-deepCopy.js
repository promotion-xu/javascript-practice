function deepCopy(obj) {
  let result = {};
  if (typeof obj === null) return obj;
  if (typeof obj !== "object") return obj;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
      result[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return result;
}
let obj = {
  name: "xz",
  o: {
    age: 1,
  },
};

let newObj = deepCopy(obj);

newObj.o.age = 2;
