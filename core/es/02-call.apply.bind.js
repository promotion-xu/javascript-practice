



// call使用


const obj = {
    name: 'a'
}

function fn(a,b) {
    console.log(this.name, a, b)
}

// fn.call(obj, 1)

Function.prototype.myCall = function (context = window) {
    // 1. 判断调用myCall的类型， 因为call方法是函数原型上的方法
    if (typeof this !== 'function') {
        throw new TypeError('caller is not a function');
    }

    // 2. 将fn赋值给context的一个属性，这样执行context.fn(), 函数内的this指向就是context了
    context.fn = this;
    // 3. 获取除了context以外的函数参数
    const args = [...arguments].slice(1);
    // 4. 执行函数
    const result = context.fn(...args);
    // 5. 删除属性
    delete context.fn;
    return result;

}

// fn.myCall(obj, 1) // 'a' 1


// apply 使用

// fn.apply(obj, [1, 2]) // 'a' 1 2

Function.prototype.myApply = function(context = window) {
    if (typeof this !== 'function') {
        throw new TypeError('caller is not a function');
    }
    context.fn = this;
    // 这里函数第二个参数可能是undefined 或者 数组
    const args = arguments[1] || [];
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

// fn.myApply(obj, [1, 2])


// bind使用

// const o = fn.bind(obj, 1, 2) // bind返回的是一个函数，函数里this指向obj
// o() // a 1 2


Function.prototype.myBind = function(context = window) {
    if (typeof this !== 'function') {
        throw new TypeError('caller is not a function');
    }
    context.fn = this;
    const args = [...arguments].slice(1)
    return function() {
        const result = context.fn(...args);
        delete context.fn;
        return result;
    }
}

const o = fn.myBind(obj, 1, 2)
o()