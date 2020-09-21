//  定义父类
function Parent(name) {
  this.name = name;
}

Parent.prototype.getName = function () {
  return this.name;
};

// 定义子类
function Children() {
  this.age = 24;
}

// 通过Children的prototype属性和Parent进行关联继承

Children.prototype = new Parent("陈先生");

// Children.prototype.constructor === Parent.prototype.constructor = Parent

var test = new Children();

// test.constructor === Children.prototype.constructor === Parent
console.log(test.age);
console.log(test.getName());

//
