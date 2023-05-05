abstract class Employee {
    name : string;
    paymentPerHour : number;
    //parameterisied constructor
    constructor(name:string, paymentPerHour:number){
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    // this method is abstract method only declartion
    public abstract calculatSalary():number;
}


class Contractor extends Employee{
   
    hoursOfWorking:number;
    constructor(name:string, paymentPerHour:number,hoursOfWorking:number){
        // parent class constructor call using super key
        super(name, paymentPerHour);
        this.hoursOfWorking = hoursOfWorking;
    };

    public calculatSalary(): number { return this.paymentPerHour*this.hoursOfWorking ;}

}


class fullTimeEmp extends Employee{
    //parameterised contructor
    constructor(name:string, paymentPerHour:number){
        super(name,paymentPerHour);
    }
    public calculatSalary(): number { return this.paymentPerHour*8;}
}

let objcontractor = new Contractor("avinash", 400, 4);
let objFullTimeEmp= new fullTimeEmp("Nagesh", 500);

console.log(objcontractor.calculatSalary());//400*4=1600
console.log(objFullTimeEmp.calculatSalary());//500*8=4000

// if child cnstructor alway call  parent by using super
//exm

class Test { };
class Test1 extends Test{
    constructor(){
        super()
    }
}

let objTest1 = new Test1();