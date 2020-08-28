// 要求设计 LazyMan 类，实现以下功能

class LazyManClass {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    console.log(`Hi I am ${name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  async sleep(time) {
    let _this = this;
    await (function (t) {
      setTimeout(function () {
        console.log(`等待了${t}秒`);
        // _this.next();
      }, t * 1000);
    })(time);
    // this.taskList.push(fn);
    return this;
  }
  eat(type) {
    console.log(`I am eating ${type}`);
    return this;
  }
  sleepFirst(time) {}
  next() {
    let fn = this.taskList.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// 1.
// LazyMan("Tony");
// Hi I am Tony

// 2.
LazyMan("Tony").sleep(10).eat("lunch");
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

// LazyMan("Tony").eat("lunch").sleep(10).eat("dinner");
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

// LazyMan("Tony")
//   .eat("lunch")
//   .eat("dinner")
//   .sleepFirst(5)
//   .sleep(10)
//   .eat("junk food");
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
