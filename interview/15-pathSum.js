let tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: null,
    right: null,
  },
};

// 1）既然要用到递归来解决，这样来想，每遍历一个结点，我们就用 sum 减去当前结点，
//然后问题就会变成从当前结点到叶子节点能够满足 sum 减去当前结点的值，那么就存在满足条件的路径。

// 2）在（1）中，将问题化成子问题，然后子问题和问题有相同的解决思路，那么就可以使用递归来解决。

// 3）用 flag 做标识，一旦满足路径之和等于目标值，就让改变 flag 的状态。

// 5
// / \
// 4   8
// /   / \
// 11  13  4
// /  \      \
// 7    2      1

// 22 (5, 4, 11, 2)
function pathSum(root, target) {
  let flag = false;
  if (!root) return false;
  const dfs = (n, s) => {
    if (n.left && n.right && s === target) {
      flag = true;
    }

    if (n.left) dfs(n.left, s + n.left.value);
    if (n.right) dfs(n.right, s + n.right.value);
  };

  dfs(root, target);
  return flag;
}

console.log(pathSum(tree, 8));
