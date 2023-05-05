var Gender;
(function (Gender) {
    Gender[Gender["other"] = 2] = "other";
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
console.log(Gender.other);
console.log(Gender.male);
console.log(Gender.female);
console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[2]);
var weak;
(function (weak) {
    weak[weak["sunday"] = 1] = "sunday";
    weak[weak["monday"] = 2] = "monday";
})(weak || (weak = {}));
console.log(weak[2]);
