/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let house = {
    isFull: true,
    occupants: 1,
    owner:'Cameron',
    chores: {
        dishes: 'me1',
        vacuum: 'me2',
        laundry: 'me3'
    }
}
console.log(house.chores.dishes);

var owner = Cameron;

if(owner = Cameron){
    console.log("Cameron is the owner!")
};//didn't work

let obj = {
    str:'ABC',
    num: 35,
    bool: true,
    arr: [1,'abc',false,20],
    objTwo: {
        one:'string'
    },
}

//console.log(typeof obj.str);
let typevalue = typeof obj.str;
//console.log('value:', value);