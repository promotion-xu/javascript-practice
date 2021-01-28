let p = new Promise((resolve, reject) => {
  resolve(1);
});

p.then(
  (value) => {
    console.log(value);
  },
  (reason) => {}
);

p.finally(() => {
  console.log(111);
});

Promise.prototype.myFinally = function (callback) {
  let P = this.constructor;
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (reason) =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};
