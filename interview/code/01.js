// bind
// throttle

// for (var i = 0; i < 10; i ++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i)
//     })
//   })(i)
// }

// const func = ()=> {
//   const a = '111'
//   const fun2 = ()=> console.log(a)
//   return ()=> console.log('_')
// }

// const next = func()

// '12345'.split('')

// console.log("12345" instanceof Object);

// join()  reduce forEach map filter find reverse sort indexOf slice

//1. 包含这个数据 true 不包含这个数据 false
// const num = 1

// const arr = [1, 2, 3 ]

// // includes
// // indexOf
// // some
// // every

// function hasNum(arr, num) {
//   const len = arr.length
//   for (let i = 0; i < len; i ++) {
//     if (arr[i] === num) {
//       return true
//     }
//   }
//   return false
// }

//

// const arr =[1, 2, [3, 4, 5]]

// function flatten(arr) {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(cur instanceof Array ? flatten(cur) : cur)
//   }, [])
// }

// console.log(flatten(arr))

// 捕获 - 触发 - 冒泡

// js event loop
const promise = new Promise(resolve => {
  console.log("11111");
  setTimeout(() => {
    console.log("22222");
  }, 0);
  resolve();
  console.log("resolve");
  throw new Error("error");
  console.log("error");
});
promise
  .then(
    () => {
      console.log("33333");
      setTimeout(() => {
        console.log("44444");
      }, 0);
    },
    () => {
      console.log("reject");
    }
  )
  .catch(() => {
    console.log("catch");
  });
console.log("55555");

// '11111'
// 'resolve'
// '55555'
// '33333'
// '22222'
// '44444'
// 'catch'

// componentDidMount

// componentShouldUpdate

// import React, { memo } from 'react'

// const A = props => {

// }
// export default memo(A, (prev) => {
//   if (props === prev) {
//     return true
//   }
// })

// const A = Component => {

//   const [flag, setFlag] = useState(false)

//   useEffect(() => {
//     window.addEventListener('scroll', (e) => {
//       if () {
//         setFlag(true)
//       }
//     })
//     return function () {
//       window.removeEventListener('scroll')
//     }
//   })
//   if (flag) {
//     return <Component  />
//   } else {
//     return <img />
//   }
// }
