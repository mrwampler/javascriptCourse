let weather = 75

if (weather < 70) {
    console.log("Wear a jacket.")
} 
else {
    console.log("No jacket necessary!")
}


// Challenge - Capitalize first letter in name and lowercase the last
let name = "mitchelL"

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter)
}
else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters)
}



/******************* */
//Else if

var age = 23

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.")
}
else if (age >= 18 && age < 21) {
    console.log("Yay! You can vote!")
}
else if (age >= 21 && age < 25) {
    console.log("Yay! You can drink!")
}
else if (age >= 25) {
    console.log("Yay! You can rent a car!")
}
else {
    console.log("I don't know how old you are.")
}


// Challenge
var FB = 15

if (FB % 5 === 0 && FB % 3 === 0) {
    console.log("Fizz Buzz")
}
else if (FB % 5 === 0) {
    console.log("Buzz")
}
else if (FB % 3 === 0) {
    console.log("Fizz")
}
// We don't need an else statement since we are spelling Fizz Buzz. USaully, we'd have an else incase the 
// variable doesn't meet any of the conditions.