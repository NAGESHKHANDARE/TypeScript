var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () { _this._age++; };
        this._age = age;
    }
    Person.prototype.age = function () { return this._age; };
    return Person;
}());
var objPerson1 = new Person(0); // object
//objPerson.growOld(); //growOld is simple write not arrow func use
var growold_var = objPerson1.growOld;
growold_var();
console.log("age", objPerson1.age()); // in console=> age 1
