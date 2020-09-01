const data = [
  {
    id: "1",
    name: "test1",
    children: [
      {
        id: "11",
        name: "test11",
        children: [
          {
            id: "111",
            name: "test111",
          },
          {
            id: "112",
            name: "test112",
          },
        ],
      },
      {
        id: "12",
        name: "test12",
        children: [
          {
            id: "121",
            name: "test121",
          },
          {
            id: "122",
            name: "test122",
          },
        ],
      },
    ],
  },
];

const findValue = (value) => {
  let result = [];
  let findArr = data;
  let skey = "";
  for (let i = 0, l = value.length; i < l; i++) {
    skey += value[i]; // '1'
    let item = findArr.find((item) => {
      return item.id == skey;
    });

    if (!item) {
      return [];
    }

    result.push(item.id);
    if (item.children) {
      findArr = item.children;
    } else {
      if (i < l - 1) return [];
      return result;
    }
  }
};

console.log(findValue("112")); // [1, 11, 112]
console.log(findValue("122")); // [1, 12, 122]
console.log(findValue("121")); // [1, 12, 121]
