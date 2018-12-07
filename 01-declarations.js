// Functions are a set of statements that perform a task or calculates a value

// Declaration
hi()
console.log(hi)
function hi() {
    console.log("Hi!")
}

// Expression
var hi = function h1() {
    console.log("I already said hi")
}

// Declarations = hoisted
// Expressions != hoisted

//  Function calling
hi()
hi()
hi()

function hey() {
    console.log("Dave, tell CooperI said hey")
}
hey()



// Challenge - Create a function that, when invoked, lists out the numbers 1 through 10
function numList() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
numList()


// Challenge - given an array, create a function that lists out individual values
let array = ['This', 'Is', 'Really', 'Cool']

function random() {
    for (word in array)
    console.log(array[word])
}
random()