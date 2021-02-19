const fs = require("fs");
fs.readFile("test.mtl", "utf8", function (err, data) {
  //   console.log(data);
  let theFile = data.toString().split("\n").slice(4);
  let arr = [];
  let obj = {};
  theFile.forEach((item) => {
    // const arr = item.split(" ");
    // console.log(arr);
    if (!item) {
      console.log(item);
    }
  });
  // theFile.forEach((item) => {
  //   const arr = item.split(" ");
  //   const key = arr[0];
  //   const value = arr.length === 2 ? arr[1] : arr.slice(1);
  //   obj[key] = value;
  //   console.log(obj);
  // });
});
