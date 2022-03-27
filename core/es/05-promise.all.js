

const p1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('p1')
        }, 2000)
    })
}
const p2 = () => Promise.resolve(2)

const p3 = 3


async function main() {
    Promise.all([p1(), p2(), p3]).then(res => {
        console.log(res)
    })
}

// main()


function myAll(arr) {
    let results = []
    return new Promise((resolve,reject) => {
        let count = 0
        arr.forEach((item, index) => {
            Promise.resolve(item).then(res => {
                results[index] = res
                
                if (++count === arr.length) {
                    resolve(results)
                }        
            }).catch(e => reject(e))
        })
        
    })
}

myAll([p1(), p2(), p3]).then(res => {
    console.log(res)
})
