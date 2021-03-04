// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }

// console.log("script start");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// async1();
// new Promise((resolve, reject) => {
//   console.log("promise1");
//   resolve();
// }).then(() => {
//   console.log("promise2");
// });

// console.log("script end");

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// console.log("start");
// setTimeout(() => {
//   console.log("children2");
//   Promise.resolve().then(() => {
//     console.log("children3");
//   });
// }, 0);

// new Promise((resolve, reject) => {
//   console.log("children4");
//   setTimeout(() => {
//     console.log("children5");
//     resolve("children6");
//   });
// }).then(res => {
//   console.log("children7");
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });

// 'start'
// children4

// children2
// children3
// children5
// children7
// children6

// const p = function() {
//   return new Promise((resolve, reject) => {
//     const p1 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1);
//       }, 0);
//       resolve(2);
//     });
//     p1.then(res => {
//       console.log(res);
//     });
//     console.log(3); //
//     resolve(4);
//   });
// };

// p().then(res => {
//   console.log(res);
// });
// console.log("end"); //

// 3
// 'end'
//  2
// 4

const p = function() {
  return new Promise((resolve, reject) => {
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 0);
    });
    p1.then(res => {
      console.log(res);
    });
    console.log(3); //
    resolve(4);
  });
};

p().then(res => {
  console.log(res);
});
console.log("end"); //

// 3
// end
// 4
// 1
