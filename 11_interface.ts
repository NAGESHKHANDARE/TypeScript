// Interface = it is one kind of contract
// use => object, function, array and enum
//only abstact method ie only decleration
// in object no edit but in class add own method
// in abstract use extend use
// in interface use implements use bcz 
// interface use only complation time so not show in js 

interface Iproduct {
    id : number,
    name: string,
    description : string,
    price? : number, // ? it is optional so use ?
    display() : number // only declaration
}

var objProduct : Iproduct = {
    id      : 101,
    name    : "Iphone",
    description: "it is awesome",
    display : function (): number {
       return 120;
    },
    price   : 100000//optional
}


console.log("**************************************");

interface Iprint {
    print():void;
}

class Excel implements Iprint {
    print(): void {
       console.log("EXCEL");
    };
}

class Doc implements Iprint {
    print(): void {
        console.log("DOC");
        
    }
};

class pdf implements Iprint {
    print(): void {
        console.log("PDF");
        
    }
};


let objExcel = new Excel(); 
console.log(objExcel.print());
