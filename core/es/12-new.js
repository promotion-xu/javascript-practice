



function _new(fn, ...args) {
  const obj = Object.create(fn.prototype)
  const result  = fn.apply(obj, args)
  return result instanceof Object ? result : obj
}

function Animal(name) {
  this.name = name;
}

const dog = _new(Animal, 'dog')
console.log(dog)