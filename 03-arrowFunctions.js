function coffee() {
    console.log("I always have coffee")
}
coffee()

// Fat Arrow Function
let coffee = () => {
    console.log("Coffee is GREAT!")
}
coffee()

// One-line fat arrow function
var cat = () => console.log("I lke cats")
cat()

// For Concise Fat Arrow Functions, returns are implied
let name = (firstName) => console.log(`${firstName} is my name`)
name("Mitchell")



// Returns
function capitalizeName(name) {
    let capName = ''
    for (let h in name) {
        if (h == 0) {
            capName += name[h].toUpperCase()
        }
        else {
            capName += name[h].toLowerCase()
        }
    }
    console.log(capName)
    return capName
}
capitalizeName("miTCHell")

//const newName = capitalizationName("miTCHell")
//console.log(newName + " how are you?")


/*
Challenge:
Make a tip calculator using a function
Have it return the value
Capture that returned value in a variable
Print that variable
*/

function tipCalc(bill) {
    tip = (bill * 0.2)
    return tip.toFixed(2)
}

let totalTip = tipCalc(20.00)
console.log(totalTip)