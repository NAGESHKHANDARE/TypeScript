let disc !: Number; // disc : number => disc ! : number


function rolldisc (){
    disc = (Math.round(Math.random() * 6) + 1);
}

rolldisc();
console.log( 'current disc value', disc);// comapare error occour but not run error bcz not assing value in disc var firstly after call then assin value so line no 1 use !


// Math.round() = static method alwasy round down and return the larggest interger
//                 less than equal to given number 

//Math.random() = return no from 0 to 1

// math.round()
const num111 = 5.7;
const num222 = 3.2;

const roundedNum1 = Math.floor(num111); // roundedNum1 is 5
const roundedNum2 = Math.floor(num222); // roundedNum2 is 3

console.log(roundedNum1); // Output: 5
console.log(roundedNum2); // Output: 3

//Math.random();

const randomNum = Math.random(); // randomNum is a number between 0 and 1 (exclusive)

console.log(randomNum); // Output: 0.123456789 (a random number between 0 and 1)
