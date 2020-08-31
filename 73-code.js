// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const findIndex = (numArr, target) => {
  let map = {};
  for (let i = 0; i < numArr.length; i++) {
    map[arr[i]] = i; // map : { 2:0, 7:1, 11:2, 15:3 }
  }
  for (let i = 0; i < arr.length; i++) {
    let d = target - arr[i]; // 9 - 2
    if (map[d]) {
      return [i, map[d]];
    }
  }
  return undefined;
};
