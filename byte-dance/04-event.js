// 捕获 、 目标、 冒泡

// 冒泡
// window.addEventListener("click", () => {}, false);
// //捕获
// window.addEventListener("click", () => {}, true);

// 点击页面，提示你被封禁了

window.addEventListener(
  "click",
  () => {
    if (banner) {
      e.stopPropogation();
    }
  },
  true
);
