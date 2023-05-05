// Interface = it is one kind of contract
// use => object, function, array and enum
//only abstact method ie only decleration
// in object no edit but in class add own method
// in abstract use extend use
// in interface use implements use bcz 
var objProduct = {
    id: 101,
    name: "Iphone",
    description: "it is awesome",
    display: function () {
        return 120;
    },
    price: 100000 //optional
};
console.log("**************************************");
var Excel = /** @class */ (function () {
    function Excel() {
    }
    Excel.prototype.print = function () {
        console.log("EXCEL");
    };
    ;
    return Excel;
}());
var Doc = /** @class */ (function () {
    function Doc() {
    }
    Doc.prototype.print = function () {
        console.log("DOC");
    };
    return Doc;
}());
;
var pdf = /** @class */ (function () {
    function pdf() {
    }
    pdf.prototype.print = function () {
        console.log("PDF");
    };
    return pdf;
}());
;
var objExcel = new Excel();
console.log(objExcel.print());
