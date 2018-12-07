// SWITCH

/****** 
Switch statements help us choose between several options for a variable and a default
*Four main parts to a switch statement:
-switch, the argument being evaluated
-case, one of the options for the variable to be
-break, this breaks us out of the switch statement once we hit our case
-default, the default if we don't hit one of our cases, not necessary
***/

var friend = "Dave"

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing?")
        break;
    case "Dave":
        console.log("Hey Dave, how is Cooper?")
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD")
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`) // String Interpolation
// String interpolation uses a back-tick ` instead of quotes because we can drop the variable in without having to add the variable later
}

var friend = "Reannon"

switch (friend) {
    case "Mitchell":
        console.log("Hey Mitchell, when are we playing tennis?")
        break;
    case "Reannon":
        console.log("Hey Reannon, when are you drawing blood?")
        break;
    case "Holly":
        console.log("Hey Holly, when are we going to lunch?")
        break;
    case "Michael":
        console.log("Hey Michael, when are we playing video games?")
        break;
    default:
        console.log(`I'm sorry ${friend}, we don't have anything planned.`)
}



let yep = -8

switch (true) {
    case (yep < 0 && yep > -10):
        console.log("Worked")
        break;
    case (yep > 0):
        console.log("Worked!")
        break;
    default:
        console.log("Didn't work")
}



/********************
//TERNIARY

What is a ternary? A great way to write a single line for an if/if-else statement.
********************/

let x = 6
(x > 0) ? console.log("yes") : console.log("no")

///////////
if (x == 0) {
    console.log("hello")
}
else if (x < 0) {
    console.log("hi")
}
else {
    console.log("goodbye")
}
// ...is the same as:
let x = 7;
(x == 0) ? console.log("hello") : (x < 0) ? console.log("hi") : console.log("goodbye")



// Challenge
var age = 30;
(age >= 25) ? console.log("Yay! You can rent a car!") : (age >= 21) ? console.log("Yay! You can drink!") : (age >= 18) ? console.log("Yay! You can vote!") : console.log("Sorry, you're too young to do anything.")

