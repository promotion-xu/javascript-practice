this.onmessage = function (ev) {
  console.log(ev.data); // html页面输出12   注：子线程没有alert
  let arr = ev.data;
  arr.sort((a, b) => a - b);
  this.postMessage(arr);
};
