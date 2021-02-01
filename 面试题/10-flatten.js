let arr = [[1, 2], "2", [3, [4, 5]]];

function flatten(arr) {
  let result = [];
  fla(arr);
  function fla(arr) {
    arr.forEach((v) => {
      if (v instanceof Array) {
        fla(v);
      } else {
        result.push(v);
      }
    });
  }
  return result;
}

// function flatten(arr) {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(cur instanceof Array ? flatten(cur) : cur);
//   }, []);
// }

console.log(flatten(arr));
