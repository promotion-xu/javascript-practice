// class EventEmiter {
//   constructor() {
//     this.events = {};
//   }
//   emit(event, ...args) {
//     this.events[event].forEach((fn) => {
//       fn.apply(this, args);
//     });
//   }
//   on(event, fn) {
//     if (this.events[event]) {
//       this.events[event].push(fn);
//     } else {
//       this.events[event] = [fn];
//     }
//   }
//   remove(event) {
//     delete this.events[event];
//   }
// }

class EventEmiter {
  constructor() {
    this.events = {};
  }

  // 绑定
  on(event, fn) {
    if (this.events[event]) {
      this.events[event].push(fn);
    } else {
      this.events[event] = [fn];
    }
  }

  // 触发
  emit(event, ...args) {
    this.events[event].forEach((fn) => {
      fn.apply(this, args);
    });
  }

  remove(event) {
    delete this.events[event];
  }
}

const eventHub = new EventEmiter();

eventHub.on("test", (data) => {
  console.log(data);
});

eventHub.emit("test", 1);
console.log(2);
