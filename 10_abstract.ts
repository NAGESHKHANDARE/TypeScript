// coomon method but diff implitation
// common property but differnt value so crate abstract 
// crate abstract class and write abstract method and also non abstract method
// then use differnt class for differnt cars and at class name such "Hundai" clik and baloon clik
// then show abstrac all option clik all abstract value show error gon
// then console log acess car and own Hundai method by using crate object 




abstract class Car {
    wheel() : string { return '4 wheeler';}
    checkAs():string{ return 'Ac is Available';}
    callFacility():string{ return "call facility supported";}

    abstract Price(): number;
    abstract Seats(): number;
    abstract Color(): string;

}



class Hundai extends Car {
    Price(): number { return 1000000;}
    Seats(): number { return 5;}
    Color(): string { return "White";}

}
   
console.log( hundai.callFacility());



class Toyota extends Car{
    Price(): number { return 1100000;};
    Seats(): number { return 7}
    Color(): string { return "Balck"}
    DiscountPrice(){ return '20% discount'};
};
let toyota = new Toyota();
console.log(toyota.DiscountPrice());
console.log(toyota.callFacility());
console.log(toyota.Price());

//you cannot create an instance or object of an abstract class directly.
//bcz does not compleat implition and it is abstrac class  

let car = new Car();









