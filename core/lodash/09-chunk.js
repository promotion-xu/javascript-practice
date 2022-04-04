

function chunk (list, size) {
  const l = []
  for (let i = 0; i < list.length; i++ ) {
    const index = Math.floor(i / size)
    l[index] ??= [];
    l[index].push(list[i])
  }
  return l
}


const list = [3, 1, 2, 4, 5, 7, 8]

console.log(chunk(list, 2))
