class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speakSth() {
    console.log(`${this.name} spoke sth`);
  }
}

// 转化为
var Parent = function () {
  function Parent(name, age) {
    _classCallCheck(this, Parent);
  }
  _createClass(Parent, [
    {
      key: "speakSth",
      value: function speakSth() {
        console.log(`${this.name} spoke sth`);
      },
    },
  ]);
};

class Child extends Parent {
  static width = 18;
  constructor(name, age) {
    super(name, age);
  }
  coding() {
    console.log(`${this.name} is coding`);
  }
}

var Child = (function (_Parent) {
  _inherits(Child, _Parent);
  function Child(name, age) {
    _classCallCheck(this, Child);
    return _possibleConstructorReturn(
      this,
      Child.__proto__ || Object.getPrototypeOf(Child).call(this, name, age)
    );
  }
  _createClass(Child, [
    {
      key: "coding",
      value: function coding() {
        console.log(`${this.name} is coding`);
      },
    },
  ]);
  return Child;
})(Parent);
