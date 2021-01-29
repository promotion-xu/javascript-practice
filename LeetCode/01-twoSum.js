function twoSum(nums, target) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

let arr = [1, 2, 3, 4, 5];

let target = 7;

console.log(twoSum(arr, target));
