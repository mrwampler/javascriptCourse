// FUNCTIONS
var x = 12
function scope() {
    var x = 33
    console.log(x);
}
scope() // 33
console.log(x) // 12

// If you take var out, you are reassigning 'x' to a new number. Var inside the scope is reassigning a new variable even if it's the same letter.
var x = 12
function scope() {
    x = 33
    console.log(x);
}
scope() // 33
console.log(x) // 33




/* True Statements */
// Var and let

// global scope
var x = 12
// local scope
function scope() {
    var x = 33
    // block scope
    if (true) {
        var /*or 'let'*/ x = 45
        console.log(x) // 45 ... if 'var' is changed to 'let', the answer is 33
    }
    console.log(x) // 45
}
scope()
console.log(x) // 12

// Const
function scope() {
    const x = 33
    if (true) {
        const x = 45
        console.log(x)
    }
    console.log(x) // 45
}
scope()


/*
    variable grammar     obey functional scope       obeys block scope       can be changed after initialization
    var                         x                           -                       x
    let                         x                           x                       x
    const                       x                           x                       -
*/