type Person2 ={
    name : string;
}

type Email = {
    email : string;
}

type Phone = {
    phone: string; 
}

//function contact (details : Person2 & Email & Phone){     //  OR
type contactDetails = 
& Person2
& Email
& Phone
function contact1 (details : contactDetails ){
    console.log(`Dear ${details.name} I hope you have received our email at ${details.email} we will call you at ${details.phone} shortly,`);
    
}
let obj : Person2 & Email & Phone = {name : 'Nagesh', email : 'n@gmail.com', phone : ' 07242439054' }
contact1(obj);


//2=>
interface man {name : string;};
const human : man = { name : "Avinash"};
console.log(human.name);// output Avinash


//3=>
interface Person3 {
    Name : string;
   Age :  number;
}
interface Employe3 {
   ID :  string;
   Position : string;
}

type  EP_TypeProperty =  Person3  &  Employe3 ;  	//  declear Employperson are both  type  property of P and E

// create object of  empl person
const EP_object : EP_TypeProperty ={
   Name : "Nagesh",
   Age : 38,
   ID : "ABC123",
   Position : "Maneger"
};

console.log( EP_object);// {name : “nagesh”, age : 38}
console.log(EP_object.Age)  //  age :38
