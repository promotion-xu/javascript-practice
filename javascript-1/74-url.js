// 判断一个url 是否正确

function isUrl(url) {
  try {
    let url = new URL(url);
    return true;
  } catch {
    return false;
  }
}

console.log(isUrl("wff"));
console.log(isUrl("www.baidu.com"));
console.log(isUrl("127.0.0.1"));
console.log(isUrl("8000"));
