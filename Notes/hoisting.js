/*
What does hoisting mean and what does it do? Think of it like opening a book with multiple chapters. One of the first pages in the book might be an index or table of contents with a likt of the variou chapter you might find. We can look at this page to get an idea of what information we can expect to find in the book later.

hoisting does this in a similar way. There are two phases that happen when we run our code;
-creation phase: any variable (var, let, const) and  function in our code are stored in memory.
-Execution phase: Values are assigned to the variables and functions that are in memory during the create phase

Whats on the left of the = sign is stored to memory. What's on the right is assigned during the execute phase.
    (create)    (execute)
let variable = 'value';

When JS runs, it first reads top to bottom and store the variables, kind of like putting the chapters names in the index. After that, it reads top to bottom again in sequential order to fill out the value of each chapter. 


just use let when hoisting. it will create a locally scoped variable.
var gives you errors along the way. it creates a globally scoped variable where it exists everywhere
*/

let num = 12;
console.log(num);

sayHi()
function sayHi() {
    console.log('Hello');
    let hi ='Hola';
    console.log(hi);
}//can cause hella issues, better to avoid hoisting

//varFunc();//functions get hoisted. if you hide this and put it below the curly bracket at the end it will run

let varFunc = function() {//can not use if not defined in parens
    console.log('Testing. Testing.')
}
varFunc();


