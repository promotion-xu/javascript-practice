var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "";
        this.name = name;
    }
    Person.prototype.say = function (n) {
        console.log(n);
    };
    return Person;
}());
var Xuzhen = /** @class */ (function (_super) {
    __extends(Xuzhen, _super);
    function Xuzhen(name) {
        var _this = _super.call(this, name) || this;
        _this.a = 1;
        _this.b = 2;
        _this.c = 3;
        return _this;
    }
    Xuzhen.d = 4;
    return Xuzhen;
}(Person));
var x = new Xuzhen("xuzhen");
