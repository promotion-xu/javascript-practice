let array = [1, 2, 4, 5, 9];

// forEach
const forEach = (array, fn) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    fn(array[i], i);
  }
};

// forEach(array, (item, index) => {
//   console.log(index, item);
// });

// map
const map = (array, fn) => {
  let result = [];
  for (const item of array) {
    result.push(fn(item));
  }
  return result;
};

// filter
const filter = (array, fn) => {
  let result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};

// find
const find = (array, fn) => {
  for (const item of array) {
    if (fn(item)) {
      return item;
    }
  }
  return undefined;
};
// every

const every = (array, fn) => {
  let flag = true;
  for (const item of array) {
    if (!fn(item)) {
      return false;
    }
  }
  return flag;
};

// some

const some = (array, fn) => {
  let flag = false;
  for (const item of array) {
    if (fn(item)) {
      return true;
    }
  }
  return flag;
};
