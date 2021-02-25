/*
* **********
! FUNCTIONS
* **********
    tYPES OF FUNCTIONS:
    - Declarion
    - Expression
    - Anonymous
*/

//! Function Declaration

function declaration() {
    console.log('I\'m a Function Declaration!');
}

declaration();
//these are hoisted
//runs when we call them (invoked)

//!Functions Exression

let expression = function () {
    console.log('I\'m a Function Expression');
}

expression();
//NOT hoisted
//invoked using the variable name

