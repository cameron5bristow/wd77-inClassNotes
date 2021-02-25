/*
* *********
! Parameters
* *********

    - Parameters are values we haven't assigned yet.
    - Passed through functinos called as argumnets.

    ex:
        function nameFunc(parameter) {
            return ...
        }

        nameFunc(argument);

    - naming should reflect disred data

*/
function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`);
};

coffeePot('dark roast'); //"dark roast" is my argument/value being passed
coffeePot('medium roast');
coffeePot('peppermint tea');

let kettle = coffeePot; //<--this is known as a function reference
kettle(); // <-- returns an undefined where our value should be 
kettle('green tea');


//!MULTIPLE PARAMETERS & ARGUMENTS

function dinner(main, side, drink) {
    console.log(`For dinner, I had ${main} and ${side}. To wash it down, I had a ${drink}.`)
};

dinner('steak', 'potatoes', 'coke');
dinner('potatoes', 'coke', 'steak');
// - arugments fall in line w parametes regaring their position

//! RETURN
// - Function can manipulte our data and return a new value.

function calc(one, two, three) { //<-- one, two, three are parameters. thet can be named anything
    let total = one + two + three;
    let average = Math.round(total / 3); //Math.round()rounds the value to the nearest integer
    return average;
}

let avgWeight = calc(15,60,55);
console.log(`These three dogs weigh an average ${avgWeight} lbs.`);

