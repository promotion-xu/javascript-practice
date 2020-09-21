function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"; // 将原来的属性修改了
  o = new Object(); // 又指向了一个新的地址
  o.siteUrl = "http://www.google.com";
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl); // baidu
