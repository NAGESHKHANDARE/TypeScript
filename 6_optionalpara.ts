function display(id : number, name : string, role?: string){  // role? = optional so use ?
    console.log(`Id` , id);
    console.log(`Name`, name);
    if (role != undefined){
    console.log(`Role`, role);}
}

display(1, `Harry`, `Admin`);

display(2, `Harmayni`);// not 3rd role define so it is optional so use in role "?"
                       // role is undefined

function display2(a : number, b : string, c : string = `Gest User`){
    console.log(`a`,a);
    console.log(`b`,b);
    console.log(`c`,c);//Gest User 
}

display2(11, `AA`);//output = 11  AA  Gest User
display2(22, `BB`, `Admin`); // 22  BB  Admin





