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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.wheel = function () { return '4 wheeler'; };
    Car.prototype.checkAs = function () { return 'Ac is Available'; };
    Car.prototype.callFacility = function () { return "call facility supported"; };
    return Car;
}());
var Hundai = /** @class */ (function (_super) {
    __extends(Hundai, _super);
    function Hundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundai.prototype.Price = function () { return 1000000; };
    Hundai.prototype.Seats = function () { return 5; };
    Hundai.prototype.Color = function () { return "White"; };
    return Hundai;
}(Car));
var hundai = new Hundai();
console.log(hundai.callFacility());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () { return 1100000; };
    ;
    Toyota.prototype.Seats = function () { return 7; };
    Toyota.prototype.Color = function () { return "Balck"; };
    Toyota.prototype.DiscountPrice = function () { return '20% discount'; };
    ;
    return Toyota;
}(Car));
;
var toyota = new Toyota();
console.log(toyota.DiscountPrice());
console.log(toyota.callFacility());
console.log(toyota.Price());
