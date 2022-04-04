
var obj1 = {
  x1: 1,
  x2: { x: 1, y: 1 }
};

var obj2 = {
  x1: 1,
  x2: { x: 1, y: 1 }
};



function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if (obj1 === obj2) return true;
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (const key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    console.log('-----res', obj1[key], obj2[key])
    if (!res) return false;
  }
  return true
}


console.log(isEqual(obj1, obj2))