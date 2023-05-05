// funcition / method overloding  same name with diff parameters or arguments

function doubleMe(x : string);
function doubleMe(x : number);
function doubleMe(x : string[]);

function doubleMe(x : any){
    if(x && typeof x === 'number'){console.log(x*2);}
    else if(x === 'string'){console.log( x +" " + x);}
    else if(Array.isArray(x))
        { 
            return x.map(cnvalue => console.log(cnvalue))//a single parameter "name", which represents each element in the array, and logs it to the console using console.log(name).
        }
}


doubleMe(2); // 4
doubleMe("Nagesh")// Nagesh Nagesh
doubleMe(["a"])//