// extends use for optonal interface (contract like ac in car is optional)

interface IExterior {
    color :string;
    numOfDoors : number;
}

interface IInterior {
    seats : number;
    auto : boolean;
}

interface IAC extends IExterior, IInterior{
    ac :boolean;
}

interface ICar extends IExterior, IInterior {
    make : string;
    model : string;
    year : number
}


var myCar1 : ICar = {
    make: "TaTa",
    model: "Altroz",
    year: 2018,
    color: "Red",
    numOfDoors: 4,
    seats: 5,
    auto: false
}
console.log(myCar1);



var mycar2 : IAC = {
    ac: false,
    color: "red",
    numOfDoors: 5,
    seats: 7,
    auto: false
}