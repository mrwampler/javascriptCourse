var student = {name : "Peter", awesome : true, degree : "JavaScript"}
// Doesn't work - an object isn't iterable
for (item of student) {
    console.log(item)
}

var catArray = ['Tabby', 'Burmese', 'Ragdoll', 'Tortie']
// Arrays are iterable
for (cat of catArray) {
    console.log(cat)
}


// Challenge - Use an array to write a for of loop that prints [hero] is super cool!
let heroArray = [ 'Superman', 'Batman', 'Wonder Woman' ]

for (hero of heroArray) {
    console.log(hero, "is super cool!")
}