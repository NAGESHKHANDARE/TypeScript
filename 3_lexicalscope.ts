class Person 
{
    private _age : number;
    constructor(age : number){this._age =age;}

    growOld= ()=> { this._age++; }

    age(){ return this._age;}
}

const objPerson1 = new Person(0); // object

//objPerson.growOld(); //growOld is simple write not arrow func use

const growold_var = objPerson1.growOld;

growold_var();

console.log(`age`,objPerson1.age()); // in console=> age 1



