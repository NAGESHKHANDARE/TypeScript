let add = (num1, num2)=>{
       return num1 + num2;
}
let sum = add;
let result = sum(1,5);
console.log(result);

console.log("*******************************************************");
//Normal array opreat at a time using map()

let oldArray = ["Nagesh", "Mukta", "Athrav"];
console.log(oldArray);

const NewArray = oldArray.map( (cnvalue, index, arr)=>{
        return index +":"+ cnvalue +" = "+ arr});
console.log(NewArray);
//(3)['0:Nagesh = Nagesh,Mukta,Athrav', '1:Mukta = Nagesh,Mukta,Athrav', '2:Athrav = Nagesh,Mukta,Athrav']

console.log("*******************************************************");
// object array oprat at a time sung map() function

const objStudent = [
    {id:1, name: "Nagesh", degree : "Diploma IE"},
    {id:2, name: "Mukta", degree: "HSC"},
    {id:3, name: "Punam", degree:"SSC"}
];
console.log(objStudent);//(3) [{…}, {…}, {…}]

//By Map() fucntion
const NewObjStu = objStudent.map((cnvalue,index,arr)=>{
    console.log(cnvalue);
    return `My name is ${cnvalue.name}`;
});
console.log(NewObjStu);//(3) ['My name is Nagesh', 'My name is Mukta', 'My name is Punam']
