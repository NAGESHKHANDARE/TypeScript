console.log("----1----");
var num = parseInt("123px"); // num will be 123
console.log(num);
console.log("----2----");
var num2 = parseInt("111", 2); //111(binary)=7(decimal)
console.log(num2);
console.log("----3----");
var num3 = parseInt("10", 8); // 10(octal)=8(decimal) 
console.log(num3);
console.log("----4----");
var num4 = parseInt("A", 16); // A(hex no)=10(decimal)
console.log(num4);
console.log("----5----");
var num5 = parseInt("9", 8);
console.log(num5); // NaN -- 9 in octal not given bcz 01234567-10 11121314151617-20
