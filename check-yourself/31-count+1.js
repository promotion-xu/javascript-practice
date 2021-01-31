function fn() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let func = fn();
console.log(func());
console.log(func());
console.log(func());
