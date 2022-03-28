

const arr = [1, [2], [3], [[4, 5]]]

function flat(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}

console.log(flat(arr))