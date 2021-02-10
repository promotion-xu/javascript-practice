// 工厂模式

function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

const p1 = createPerson("xz", 18, "front-end");
const p2 = createPerson("Nicholas", 10, "front-end");
console.log(p1, p2);
