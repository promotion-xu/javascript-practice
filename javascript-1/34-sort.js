// sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序

const arr = [3, 15, 8, 29, 102, 22].sort((a, b) => {
  return a - b;
});

console.log("arr", arr);
