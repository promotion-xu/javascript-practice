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
  // { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 }
  MAP.set(nums[0], 0)
  for (let i = 1; i < length; i ++) {
    let other = target - nums[i] // 6, 5, 4, 3, 2
    if (MAP.get(other) !== undefined) return [MAP.get(other), i]
    MAP.set(nums[i], i)
  }
  return []
}


let arr = [1, 1, 3, 3, 5];

let target = 7;

console.log(twoSum(arr, target));
