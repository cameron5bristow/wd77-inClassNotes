/*
* ***********
//! ARROW FUNCTIONS

* ***********

- AKA fat Arrow Functions
- NOT declarations
- Don NOT get hoisted

-Two Types:
    - Concise Body: return is auotmatic
    - Block Body: retrun is NOT automatic

*/

let speak = (name) => console.log(`The ${name} goes woof!`); //everything after the first equal sign is a function //!CONSICE BODY
speak('dog'); //dog is the argument which in the value of name and were injecting that into our stream which makes our dog go woof.

//! w RETURN 
let firstName = 'Jerome';
let lastName = 'Flaherty';

let concatName = (first, last) => `${first} ${last}`;
concatName(firstName, lastName);
console.log(concatName(firstName, lastName));
//hoisting is using the call out before it is written.

//!  BLOCK BODY
//no parameters needs empty parameters, only one parameter you do not have to use parenths. more than on is parenths and seperated by a comma
let speakAgain = name => {
    console.log(`The ${name}`);
    console.log('goes woof!');
}
speakAgain('dog');
speakAgain('Frederick'); // last one will always win when running

let concat = (first, last) => { /// we are allowed to put as many after the first line as we want witha console.log('testing') and it will show up testing with the first and last name on the next line(whatever you define as first and last name)
    return `${first} ${last}`;
}
let fullName = concat('Jerome', 'Flaherty');
console.log(fullName);

let x = 9;// only reason this 'let x =and let y=' is here is so i follow the code and dont have to re r=write it on console.log
let y = 10;

let answer = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
};
console.log(answer(x, y));


