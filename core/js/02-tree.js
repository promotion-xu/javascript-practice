let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

// [
//   {
//       "id": 1,
//       "name": "部门1",
//       "pid": 0,
//       "children": [
//           {
//               "id": 2,
//               "name": "部门2",
//               "pid": 1,
//               "children": []
//           },
//           {
//               "id": 3,
//               "name": "部门3",
//               "pid": 1,
//               "children": [
//                   // 结果 ,,,
//               ]
//           }
//       ]
//   }
// ]

const transform = (items) => {
  let result = [];
  const itemMap = {};
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }

  // itemMap =  {
  //   1: { id: 1, name: "部门1", pid: 0, children: [] },
  //   2: { id: 2, name: '部门2', pid: 1, children: [] },
  //   3: { id: 3, name: '部门3', pid: 1, children: [] },
  //   4: { id: 4, name: '部门4', pid: 3, children: [] },
  //   5: { id: 5, name: '部门5', pid: 4, children: [] },
  // }

  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
};

console.log(transform(arr));
