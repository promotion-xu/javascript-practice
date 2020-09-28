// 1. 静态作用域和动态作用域
// 词法作用域和动态作用域

// js 采用的是静态作用域（词法作用域）

// 静态作用域：函数的作用域基于函数创建的位置
// 动态作用域：函数的作用域基于函数使用的位置

// 2. 理解js作用域和作用域链
// (1) 作用域就是变量访问的有效范围
// js 全局变量作用域是全局的， 函数的参数和局部变量只在函数体内定义。局部变量优先级比全局高

// 3. this的原理以及几种不同场景的使用
// (1)函数的普通调用
// function looseFn() {
//     console.log(this)
//   }

//   function strictFn() {
//     'use strict'
//     console.log(this)
//   }

//   looseFn()  // <- window
//   strictFn() // <- undefined

// (2)函数作为对象方法调用
// var myName = 'global'
// const obj = {
//   myName: 'obj',
//   getMyName() {
//     console.log(this.myName)
//   }
// }

// obj.getMyName() // <- 'obj'

// (3)函数作为构造函数调用
// function Person(name) {
//     this.name = name
//     console.log(this)
//   }

//   const person = new Person('Logan')
// <- Person {name: "Logan"}

// (4)函数通过call、apply、bind间接调用
// var name = 'global'
// function logName() {
//   console.log(this.name)
// }

// logName() // <- 'global'
// logName.call({ name: 'call' }) // <- 'call'
// logName.apply({ name: 'apply' }) // <- 'apply'
// // 注意bind返回一个函数，而不是直接调用
// logName.bind({ name: 'bind' })() // <- 'bind'
// (5)箭头函数的调用
// function genArrowFn() {
//     return () => {
//         console.log(this)
//     }
// }

// const arrowFn1 = genArrowFn()
// arrowFn1()                  // <- window

// const arrowFn2 = genArrowFn.call({ a: 1 })
// arrowFn2()                  // <- { a: 1 }

// // `call`、`apply`、`bind`无法改变箭头函数内this的指向，仍然在作用域链上寻找
// arrowFn1.call({ a: 2 })     // <- window
// arrowFn2.apply({ a: 2 })    // <- { a: 1 }
// arrowFn2.bind({ a: 2 })()   // <- { a: 1 }
