var obj = {
  name: "xz",
  show1: function() {
    console.log(this.name);
  },
  show2: () => {
    console.log(this.name);
  },
  show3: () => {
    function innerFunction() {
      console.log(this.name);
    }
    innerFunction();
  }
};

obj.show1(); // 'xz'
obj.show2(); // undefined
obj.show3(); // undefined
