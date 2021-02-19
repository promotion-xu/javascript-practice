// 而我们的Node web应用提供了一个统一的分页订单查询接口抹平后端服务版本的差异，提供给前端。
// 要求这个订单查询的接口优先返回Service A的订单数据，其次Service B, 最后Service C。
// Node的这个统一查询接口函数签名如下.

function pagination(pageSize, currentPage, arr) {
  var skipNum = (currentPage - 1) * pageSize;
  var newArr =
    skipNum + pageSize >= arr.length
      ? arr.slice(skipNum, arr.length)
      : arr.slice(skipNum, skipNum + pageSize);
  return newArr;
}

// 以 A,B,C的优先级排列合并三个服务返回的数据
async function getOrderList(pageNo, pageSize) {
  const { serviceGetCount, serviceGetList } = getMockServices();
  const [getCountA, getCountB, getCountC] = serviceGetCount;
  const [getListA, getListB, getListC] = serviceGetList;
  const countA = await getCountA();
  const countB = await getCountB();
  const countC = await getCountC();

  // todo: 实现分页合并逻辑
  Promise.all([getListA, getListB, getListC])
    .then((result) => {
      const [listA, listB, listC] = result;
      const list = listA || listB || listC; // 优先返回ServiceA的订单数据
      const resultList = pagination(pageSize, pageNo, list);
      Promise.resolve(resultList);
    })
    .catch((err) => {
      Promise.reject(err);
    });
}

// tc: 输入pageNo为1 pageSize为5 时返回为 [1,2,2,3,3]
// tc: 输入pageNo为3 pageSize为2 时返回为 [2,3]
