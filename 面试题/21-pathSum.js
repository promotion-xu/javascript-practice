let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

// 递归遍历二叉树，同时记录路径数值，遇到叶子节点计算路径和。
// var hasPathSum = function (root, sum) {
//   if (!root) return false;
//   if (!root.left && !root.right) {
//     return sum === root.val;
//   }
//   return (
//     hasPathSum(root.left, sum - root.val) ||
//     hasPathSum(root.right, sum - root.val)
//   );
// };

function hasPathSum(root, target) {
  if (!root) return false;
  if (!root.left && !root.right) {
    // 叶子节点与剩余的数比较
    return target === root.val;
  }
  return (
    hasPathSum(root.left, target - root.val) ||
    hasPathSum(root.right, target - root.val)
  );
}

console.log(hasPathSum(tree, 8));
