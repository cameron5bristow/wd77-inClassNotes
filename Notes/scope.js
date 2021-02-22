/*
Scope is the hierarchy of variables in our code. We call them: 
=Global scope or parent scope
-local scope or child scope

*/
let global = 'Earth'


function scopeExample() {
    let local = 'Indianapolis';
    let inner = 'It has many places to visit';
    console.log(local);
    console.log(`${local} is a humble city on ${global}`)
    if(true) {
        let inner = 'What a large city';
        console.log(inner);
    }
    console.log(inner);
}

scopeExample();
//console.log(local);////local variable can not be used outside of the cirly braces. ie can not be used here because the cirly brace is closed before we called it again