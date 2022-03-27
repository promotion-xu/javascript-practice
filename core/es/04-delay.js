

// delay 推迟多久后执行函数


function delay(fn, time, ...args) {
    return new Promise(resolve => {
        setTimeout(() => {
            Promise.resolve(fn(...args)).then(resolve)
        }, time)
    })
}

async function main(a) {
    console.log(a)
}

delay(main, 3000, 123)