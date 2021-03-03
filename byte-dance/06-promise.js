// Promise.all
// Promise.all([1])
//

function PromiseAll(promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      return new Error("参数必须是个数组");
    }
    const len = promiseArr.length;
    let res = [];
    let counter = 0;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promiseArr[i])
        .then(value => {
          counter++;
          res[i] = value;
          if (counter === len) {
            resolve(res);
          }
        })
        .catch(e => reject(e));
    }
  });
}

PromiseAll([]).then(result => {});
