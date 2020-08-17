const tree = [
  {
    name: "1",
    children: [{ name: "1-1" }, { name: "1-2" }, { name: "1-3" }],
  },
  {
    name: "2",
    children: [{ name: "2-1" }, { name: "2-2" }, { name: "2-3" }],
  },
  {
    name: "3",
    children: [{ name: "3-1" }, { name: "3-2" }, { name: "3-3" }],
  },
];

// 1. 深度优先遍历
const depth = (tree) => {
  let nodes = [];
  const length = tree.length;
  tree.map((item) => {
    console.log(item);
    if (item.children) {
      return depth(item.children);
    }
  });
  return nodes;
};

const arr = depth(tree);
console.log("arr", arr);

// 2. 广度优先遍历
