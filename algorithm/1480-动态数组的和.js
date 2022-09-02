// 输入：nums = [1,1,1,1,1]
// 输出：[1,2,3,4,5]
// 解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。


// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。


var runningSum = function(nums) {
  const len = nums.length;
  if (len <= 1) return nums;
  let target = [];
  let currentSum = 0;
  for (let i = 0; i < len; i ++) {
      target.push(nums[i] + currentSum)
      currentSum += nums[i]; // 1
  }
  return target
};

console.log(runningSum([1, 2, 3, 4]))
