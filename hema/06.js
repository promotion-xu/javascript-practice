// const obj = {
//   id: 0,
//   name: "一级类目-水饮料",
//   children: [
//     {
//       id: 1,
//       name: "二级类目-碳酸饮料",
//       children: [
//         {
//           id: 3,
//           name: "三级类目-可乐",
//         },
//         {
//           id: 4,
//           name: "三级类目-雪碧",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "二级类目-矿泉水",
//       children: [
//         {
//           id: 5,
//           name: "三级类目-怡宝",
//         },
//       ],
//     },
//   ],
// };

// function traverseTree(obj) {
//   const { children } = obj;
//   const arr = children.map((item) => {
//     return {
//       value: item.id,
//       label: item.name,
//       children: item.children ? item.children : undefined,
//     };
//   });
//   return {
//     value: obj.id,
//     label: obj.name,
//     children: arr,
//   };
// }

// console.log(traverseTree(obj));

const tree = [
  {
    id: 1,
    // level用来表示树的层级
    level: 1,
    name: "一级类目-水饮料",
    parentId: null,
  },
  {
    id: 2,
    level: 2,
    name: "二级类目-碳酸饮料",
    parentId: 1,
  },
  {
    id: 3,
    level: 3,
    name: "三级类目-可乐",
    parentId: 2,
  },
  {
    id: 4,
    level: 3,
    name: "三级类目-雪碧",
    parentId: 2,
  },
  {
    id: 5,
    level: 1,
    name: "二级类目-矿泉水",
    parentId: null,
  },
  {
    id: 6,
    level: 2,
    name: "三级类目-怡宝",
    parentId: 5,
  },
];

const obj1 = {
  id: 0,
  name: "一级类目-水饮料",
  children: [
    {
      id: 1,
      name: "二级类目-碳酸饮料",
      children: [
        {
          id: 3,
          name: "三级类目-可乐",
        },
        {
          id: 4,
          name: "三级类目-雪碧",
        },
      ],
    },
    {
      id: 2,
      name: "二级类目-矿泉水",
      children: [
        {
          id: 5,
          name: "三级类目-怡宝",
        },
      ],
    },
  ],
};

function list2Treelist(tree) {
  let result = [];
  if (!Array.isArray(tree)) {
    return result;
  }
  let map = {}; // { 0: {} }
  tree.forEach((item) => {
    map[item.id] = item;
  });
  tree.forEach((item) => {
    let parent = map[item.parentId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(list2Treelist(tree));
