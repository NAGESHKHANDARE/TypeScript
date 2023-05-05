var sn: string | number;
sn = `nagesh`;
sn = 100;

 type Test = string | string[];
function formatcommandLine(input : Test){
//function formatcommandLine(input : string | string[]){
    let line = '';
    if (typeof input === `string`){line = input.trim();}
    else{line = input.map(x => x.trim()).join(',')}
    return line
}

console.log(formatcommandLine('hello  ')); //hello
console.log(formatcommandLine(['hello  ','world  ']));// hello world
//console.log(formatcommandLine(1234567));

/*
class Person1 {
    public fname: string;
    public age : number;
    // parameterised constructor
    constructor (fname : string, age: number){
        this.fname = fname;
        this.age = age;
    }
}

const jackInf = new Person1('Jack', 30);
console.log(jackInf.fname, jackInf.age);
*/
// OR
class Person1 { // class parameter property
    
    constructor (public fname : string, public age: number){

    }
}

const jackInf = new Person1('Jack', 30);
console.log(jackInf.fname, jackInf.age);






