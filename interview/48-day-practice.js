

class EventEmits {
    constructor() {
        this.events = {}
    }

    on(eventType, fn) {
        if (this.events[eventType]) {
            this.events[eventType].push(fn)
        } else {
            this.events[eventType] = [fn]
        }
    }

    emit(eventType, ...args) {
        this.events[eventType].forEach(fn => {
            fn.apply(this, args)
        })
    }

    remove(eventType) {
        delete this.events[eventType]
    }
}

// 逗号是从后向前加的，这里我们先反转
function numFormat(num) {
    num = num.toString().split('.')
    const arr = num[0].split('').reverse()
    let res = []
    for (let i = 0; i < arr.length; i ++) {
        if (i !== 0 && i % 3 === 0) { // i = 3时，刚好是第四个位置，我们差入 ","
            res.push(',')
        }
        res.push(arr[i])
    }
    res.reverse()
    if (num[1]) { // 有小数点
        res = res.join("") + '.' + num[1]
    } else {
        res = res.join("")
    }
    return res
}

// console.log(numFormat(123456789.234)); // 123,456,789.234
// console.log(numFormat(23456789.234)); // 123,456,789.234

function trim(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '')
}

function deepClone(obj) {
    if (obj === null) return null
    if (typeof obj !== 'object') return obj
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }
    return result
}

function hasPathSum(root, target) {
    if (!root) return false
    if (!root.left && !root.right) {
        return target === root.val
    }
    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val)
}

function _new(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const result = fn.apply(obj, args)
    return result instanceof Object ? result : obj
}

function throttle(fn, wait) {
    let prev = 0
    return function () {
        const now = Date.now()
        if (now - prev > wait) {
            fn.apply(null, arguments)
            prev = now
        }
    }
}

function debounce(fn, delay) {
    let timer = null
    return function() {
        timer && clearTimeout(timer) d
        timer = setTimeout(function() {
            fn.apply(null, arguments)
        }, delay)
    }
}