console.log("Hello World")

// cmd ? highlighted : comment out
// console.log id s great tool o debug later down the line. For now we're going to use it as a referecnce tool

/* comments multiple
    lines of code  */

// If you want to run a scertain part of your code, highlight the code you want to run by pressing Fn F8

//These variables are different. Capitalization matters
var a = 1
var A = 2
console.log(A)

//This will be 2 because you can update your variables in your code. So since we said be = 2 last, it updated to 2.
var b = 1
var b = 2
console.log(b) //2

//However, 'let' will not update your variables
let c = 3
let c = 4
console.log(c) //Error

//It'll work by not calling 'let' again
let c = 3
c = 4
console.log(c) //4


var firstName = "Mitchell"
const lastName = "Wampler"
console.log(firstName, lastName)
// Can also be written:
console.log(firstName + " " + lastName)

//Updating
//This will not run because 'lastName' was assigned to const and you can not update const. Constants have one outcome and cannot be changed.
firstName = "Michael"
lastName = "Johnson"




/*
Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
    IT incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

//Declaration is saying the variable exists
var x
console.log('Declaration', x);

//Initionalization is saying the variable is actually equal to a number
x = 10
console.log('Initionalization 1:', x)

var y = "Hello"
console.log('Both:', x, y)
