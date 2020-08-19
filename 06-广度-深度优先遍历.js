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
  fla(tree);
  function fla(arr) {
    arr.forEach((v) => {
      nodes.push(v.name);
      if (v.children) {
        fla(v.children);
      }
    });
  }
  return nodes;
};

const arr = depth(tree);
console.log("arr", arr);

// 2. 广度优先遍历
const breadth = (node) => {
  let nodes = [];
  let stack = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      let item = stack.shift();
      let children = item.children;
      nodes.push(item);
      // 队列，先进先出
      // nodes = [] stack = [parent]
      // nodes = [parent] stack = [child1,child2,child3]
      // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
      // nodes = [parent,child1,child2]
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i]);
      }
    }
  }
  return nodes;
};
