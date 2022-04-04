
function instanceOf(obj, object) {
  let O = object.prototype
  obj = obj.__proto__;
  while(true) {
    if (obj === null) {
      return false;
    }
    if (O === obj) {
      return true
    }
    obj = obj.__proto__;
  }
}