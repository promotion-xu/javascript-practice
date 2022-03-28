

function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]'
}
console.log(isArray([]))
console.log(isArray({}))
console.log(isArray(1))