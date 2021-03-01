

class EventEmits {
    constructor() {
        this.events = []
    }

    on(eventType, fn) {
        if (this.events[eventType]) {
            this.events[eventType].push(fn)
        } else {
            this.events[eventType] = [fn]
        }
    }

    emit(eventType, ...values) {
        this.events[eventType].forEach(fn => {
            fn.apply(this, values)
        })
    }

    remove(eventType) {
        delete this.events[eventType]
    }
}

// const eventHub = new EventEmits()

// eventHub.on('test', () => {
//     console.log('111')
// })

// eventHub.emit('test', value)


function numFormat(num) {
    // 先分割出 数字的小数点
    num = num.toString().split('.')
    // 再得到整数部分翻转后的数组，如 ["9", "8", "7", "6" ...]
    const arr = num[0].split('').reverse()
    let res = []
    for (let i = 0; i < arr.length; i ++) {
        if (i !== 0 && i % 3 === 0) {
            res.push(',')
        }
        res.push(arr[i])
    }
    res.reverse()
     //再判断有没有小数需要处理
    if (num[1]) {
        res = res.join('') + '.' + num[1]
    } else{
        res = res.join('')
    }
    return res
}

function trim(str) {
    return str.replace(/^\s+/, '').replace('/\s+$/', '')
}

function hasPathSum(root, target) {
    if (!root) return false
    if (!root.left && !root.right) {
        return target === root.val
    }
    return arguments.callee(root.left, target - root.left) || arguments.callee(root.right, target - root.val)
}

function _new(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const result = fn.apply(obj, args)
    return result instanceof Object ? result : obj
}

// 节流
function throttle(fn, wait) {
    let prev = 0
    return function () {
        const now = Date.now()
        if (now - prev > wait) {
            fn.apply(this, arguments)
            prev = now
        }
    }
}

function debounce(fn, delay) {
    let timer = null
    return function () {
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(this, arguments)
        }, delay)
    }
}

function deepClone(obj) {
    if (obj === null) return null
    if (typeof obj !== 'object') return obj
    const result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] ? deepClone(obj[key]) : obj[key]
        }
    }
    return result
}

function curry(fn) {
    const len = fn.length
    return function currying(...args) {
        if (len === args.length) {
            return fn.apply(null, args)
        }
        return function (...args2) {
            return  currying.apply(null, [...args, ...args2])
        }
    }
}

function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i ++) {
        for (let j = i + 1; j < len; j ++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function quickSort(arr) {
    const len = arr.length
    if (len <= 1) return arr
    const midIndex = Math.floor(len / 2)
    const midValue = arr[midIndex]
    const left = []
    const right = []
    for (let i = 0; i < len; i ++) {
        if (i !== midIndex) {
            if (arr[i] < midValue) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat([midValue], quickSort(right))
}


Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw Error('...')
    }
    context.fn = this
    const args = Array.prototype.slice.call(arguments, 1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw Error('...')
    }
    context.fn = this
    const result = context.fn(arguments[1] ? arguments[1] : null)
    delete context.fn
    return result
}

Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw Error('...')
    }
    const self = this
    const args = Array.prototype.slice.call(arguments, 1)
    return function() {
        return self.apply(context, args.concat(arguments))
    }
}

function fib(n, prev = 1, next = 1) {
    if (n <= 2) return prev
    return arguments.callee(n - 1, next, prev + next)
}

function flatten(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(cur instanceof Array ? flatten(cur) : cur)
    },[])
}
