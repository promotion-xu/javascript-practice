

const arr = [
    { name: 'xz', age: 18},
    { name: 'tl', age: 20},
    { name: 'xl', age: 20},
]


Array.prototype.myForEach = function(cb) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i)
    }
}

arr.myForEach((item, index) => {
    console.log(item ,index)
})

const sum = arr.reduce((prev, cur, index) => {
    return prev + cur.age
}, 0)
// console.log(sum)

Array.prototype.myReduce = function(cb, initValue) {
    const arr = this;
    let result = initValue
    for (let i = 0; i < arr.length; i ++) {
        result = cb(result ,arr[i], i)
    }
    return result
}

const s = arr.myReduce((prev, cur, index) => {
    return prev + cur.age
}, 0)
console.log(s)
