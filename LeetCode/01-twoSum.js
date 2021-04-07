// function twoSum(nums, target) {
//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

function twoSum(nums, target) {
  let length = nums.length
  const MAP = new Map()
  MAP.set(nums[0], 0)
  for (let i = 1; i < length; i ++) {
    let other = target - nums[i]
    if (MAP.get(other) !== undefined) return [MAP.get(other), i]
    MAP.set(nums[i], i)
  }
}


let arr = [1, 2, 3, 4, 5];

let target = 7;

console.log(twoSum(arr, target));
