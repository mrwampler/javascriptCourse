// Parameters are like empty storge boxes we can name whatever we want. They need to use the same name inside of a function.
// We can also have multiple different parameters for a single function. We proide the parameter when we call our function. 
function pet(animal) {
    console.log(`I have a ${animal} for a pet`)
}
pet("dog")
pet("cat")
pet("cow")


function tennis(player) {
    console.log(`My favorite tennis player is ${player}`)
}
tennis("Maria Sharapova")
tennis("Roger Federer")
tennis("Serena Williams")
tennis("Novak Djokovic")


function pet2(animal, owner) {
    console.log(`${owner} has a ${animal} for a pet`)
}
pet2("dog", "Holly")
pet2("cat", "Mitchell")
pet2("cow", "Michaela")



// Challenge
function myName(first, last) {
    let fullName = first + ' ' + last
    console.log(`Hello ${fullName}, how are you doing today?`)
}
myName("Mitchell", "Wampler")
myName("Reannon", "Wampler")
myName("Holly", "Neidigh")