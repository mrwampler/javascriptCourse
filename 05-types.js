// Booleans
// What is a boolean?
var on = true
console.log(on) //on
let off = false
console.log(off) //off

// boolean can represent; true/false, yes/no, on/off

// Null = empty value (not 0, not undefined)
var empty = null
console.log(empty) //null

/* Every variable is basically a storage container in JavaScript
    Think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentioanlly packed up with nothing, but have been assembled 
    Undefined packages are packages that have nothing in there, but have not yet been assembled to leave UPS
*/

// Numbers
var degrees = 90
console.log(degrees) // 90

var precise = 999999999999999 // 15 9s
console.log(precise) // 999999999999999

var rounded = 9999999999999999 // (one more 9)
console.log(rounded) // 10000000000000000

var notQuite = 0.2 + 0.1
console.log(notQuite) // 0.30000000000000004

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numbersAreHard) // 0.3

let stringOne = "double quotes"
let sttringTwo = 'single quotes'
console.log(stringOne, stringTwo) // doubles quotes, singles quote



// Numbers vs Strings
let first = 1050 + 100
let second = '1050' + '100'

console.log(first) // 1150
console.log(second) // 1050100 ('quotes' put the two strings together without adding them)
console.log(first + second) // 11501050100
console.log(typeof first)  // number (tells you what 'first' is, which is a number)
console.log(typeof second) // string (tells you what 'second' is, which is a string)



/*
Addition vs. Concatenation

When JS sees combinging two or more numbers, it adds the values together using the built-in math functionality;
when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator -- 
it smashes the values without trying to synthesize the values
*/

let third = 1050 + '100'
console.log(third) // 1050100
console.log(typeof third) // string



// Challenge: Address

let firstName = "Mitchell"
let lastName = "Wampler"
var houseNumber = 12460
var aptNumber = 407
let street = "Breaklines Street"
let city = "Carmel"
let state = "Indiana"
var zipcode = 46032

console.log(firstName, lastName, houseNumber, street, "Apt", aptNumber, city, state, zipcode)
// Mitchell Wampler 12460 Breaklines Street Apt 407 Carmel Indiana 46032




// Objects
/*
What is an object?

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): 'blue' (value)), seperated witha colon
Each key seperated with a comma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}
console.log(burritosNow) // { size: 'large', quantity: 4, now: true }
console.log(typeof burritosNow) // object

/*
Arrays are great for lists

Denoted by []
Has values ('blue', 'green', 'yellow'), seperated with commas

var burritos = ['large', 4, true]
console.log(burritos) // ['large', 4, true]
console.log(typeof burritos) // object
*/