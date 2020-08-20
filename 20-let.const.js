//在ES5中，顶层对象的属性和全局变量是等价的，var 命令和 function 命令声明的全局变量，
// 自然也是顶层对象。

// 与之相比var let const三种，前者因为var的变量会提升到window，但是let个const不会，let ，
// const会生成块作用域，同一作用域下let和const不能声明同名变量，而var可以
