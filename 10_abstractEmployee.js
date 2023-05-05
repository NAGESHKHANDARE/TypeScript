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
var Employee = /** @class */ (function () {
    //parameterisied constructor
    function Employee(name, paymentPerHour) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    return Employee;
}());
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(name, paymentPerHour, hoursOfWorking) {
        var _this = 
        // parent class constructor call using super key
        _super.call(this, name, paymentPerHour) || this;
        _this.hoursOfWorking = hoursOfWorking;
        return _this;
    }
    ;
    Contractor.prototype.calculatSalary = function () { return this.paymentPerHour * this.hoursOfWorking; };
    return Contractor;
}(Employee));
var fullTimeEmp = /** @class */ (function (_super) {
    __extends(fullTimeEmp, _super);
    //parameterised contructor
    function fullTimeEmp(name, paymentPerHour) {
        return _super.call(this, name, paymentPerHour) || this;
    }
    fullTimeEmp.prototype.calculatSalary = function () { return this.paymentPerHour * 8; };
    return fullTimeEmp;
}(Employee));
var objcontractor = new Contractor("avinash", 400, 4);
var objFullTimeEmp = new fullTimeEmp("Nagesh", 500);
console.log(objcontractor.calculatSalary()); //400*4=1600
console.log(objFullTimeEmp.calculatSalary()); //500*8=4000
// if child cnstructor alway call  parent by using super
//exm
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
;
var Test1 = /** @class */ (function (_super) {
    __extends(Test1, _super);
    function Test1() {
        return _super.call(this) || this;
    }
    return Test1;
}(Test));
var objTest1 = new Test1();
