/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let z = 15;
let x = 3;
let y = 5;

if (z/x == 5 && z/y == 3)  {
    console.log('Fizz, Buzz');
} else if (z/y == 3) {
    console.log('Buzz');
} else if (z/x == 5) {
    console.log('Fizz');
} else {
    console.log('Youre Wrong');
}

let bugz = 'default';

switch(bugz){
    case 'Beez':
        console.log('Buzz');
        break;
    case 'pop':
        console.log('Fizz');
        break;
    default: 
    console.log('They are both divisible, therefore...Fizz Buzz');
}



z / 3 && z / 5 ? console.log('fizz Buzz') : console.log('fizz'); 
