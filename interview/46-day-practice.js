



function curry(fn) {
    const len = fn.length
    return function currying(...args) {
        if (len === args.length) {
            return fn.apply(null, args)
        }
        return function (...args2) {
            return currying.apply([...args2, ...args2])
        }
    }
}

function bubbleSort(arr) {
    const len = arr.length
    if (len === 1) return arr
    for (let i = 0; i < len; i ++) {
        for (let j = i + 1; j < len; j ++) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
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
    return arguments.callee(left).concat([midValue], arguments.callee(right))
}

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw Error('....')
    }
    const self = this
    const args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return self.apply(context, args.concat(arguments))
    }
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

Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        throw Error('...')
    }
    context.fn = this
    const result = context.fn()
    delete context.fn
    return result
}

function throttle(fn, delay) {
    let prev = 0
    return function () {
        const now = Date.now()
        if (now - prev > wait) {
            fn.apply(null, arguments)
            prev = now
        }
    }
}

function debounce(fn, wait) {
    let timer = null
    return function () {
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(null, arguments)
        })
    }
}

function fib(n, perv = 1, next = 1) {
    if (n <= 1) return prev
    return arguments.callee()
}

function flatten(arr) {
    return arr.reduce((prev, next) => {
        return prev.concat(cur instanceof Array ? flatten(cur) : cur)
    }, [])
}

function _new(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const result = fn.apply(obj, args)
    return result instanceof Object ? result : obj
}

function hasPathSum(root, target) {
    if (!root) return false
    if (!root.left && !root.right) {
        return target === root.val
    }
    return arguments.callee(root.left, target-root.val) || arguments.callee(root.right, target - root.val)
}


//事件的绑定，触发, 移出
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
        if (!this.events[eventType]) return false
        this.events[eventType].forEach(fn => {
            fn.apply(this, args)
        })
    }

    remove(eventType) {
        delete this.events[eventType]
    }
}

const eventHub = new EventEmits();

eventHub.on("test", (data) => {
  console.log(data);
});

eventHub.emit("test", 1);
console.log(2);