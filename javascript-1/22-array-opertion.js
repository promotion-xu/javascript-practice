// 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，
// 合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]

const a1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
const a2 = ["A", "B", "C", "D"];

const push = (a1, a2) => {
  let j = 0;
  let tmp = a2[0];
  let ret = [];

  for (let i = 0; i < a1.length; i++) {
    if (tmp === a1[i].charAt(0)) {
      ret.push(a1[i]);
    } else {
      ret.push(tmp);
      ret.push(a1[i]);
      tmp = a2[++j];
    }

    if (i === a1.length - 1) {
      ret.push(tmp);
    }
  }
  return ret;
};

console.log(push(a1, a2));
