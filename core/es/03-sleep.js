

// sleep, 休眠一段时间再执行后续代码

// function sleep(time) {
//     return new Promise(resolve => {
//         setTimeout(resolve, time)
//     })
// }

// es6

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

async function main() {
    await sleep(2000)
    console.log('after sleep')
}
main()