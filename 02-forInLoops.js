let student = { name : "Jaime", awesome: true, course: "JavaScript" };
            //  key     value     key    value   key      value
for (item in student) {
    console.log(item) // name, awesome, course
    console.log(student[item]) // name, Jaime, awesome, true, course, Javascript
}


let catArray = ['Tabby', 'Burmese', 'Ragdoll', 'Tortie']
for (cat in catArray) {
    console.log(cat)
}

// Challenge - Write a for loop that capitalizes the first letter of a student's name
var name = "mitchell"
var capName

for (var letter in name) {
    if (letter == 0) {
        capName = name[letter].toUpperCase()
    }
    else {
        capName += name[letter].toLowerCase()
    }
}
console.log(capName)