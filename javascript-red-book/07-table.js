// 1 * 1 = 1
// 1 * 2 = 2   2 * 2 = 4
// 1 * 3 = 3   2 * 3 = 6   3 * 3 = 9

let table = "";
for (let i = 1; i < 10; i++) {
  let tr = "";
  for (let j = 1; j <= i; j++) {
    tr += `${i} * ${j} = ${i * j} `;
  }
  table += `${tr} \n`;
}
console.log(table);
