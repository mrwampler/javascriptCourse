/* What is an array
-Has brackets
-Can hold multiple datatypes
-Great for listing
*/

let students = ['Tony', 'Marshall', 'Randy', 'Ray', 23, true, ['Ryan', 'Iesha']]
console.log(typeof students)
console.log(students instanceof Array)
console.log(students[2]) // Randy
console.log(students[6][0]) // Ryan

// Challenge - Print out Iesha
console.log(`Hello ${students[6][1]}, you look nice today!`)



let food = ['Pecan Pie', 'Shrimp', 'Quesidilla', 'Cheese cake', 'Hotdog']
for (f in food) {
    console.log(food[f])
}
food.push('porkchop') // Add food to the array
for (f in food) {
    console.log(food[f])
}
// Splice removes an item from the list
food.splice(1,1, 'Bananas')
for (f in food) {
    console.log(food[f])
}
// Removes the last item in a list
food.pop()
for (f in food) {
    //console.log(food[f])
}
// Another way to write the array
food.forEach(f => { console.log(f); })



/* 
Challenge:
-Create a list (with an array) of movies
-Use .forEach() to list your movies
-Add another movie at the end
-And replace one of your existing movies with another one
*/

let movies = ['Divergent', 'Insurgent', 'Allegiant']
movies.push('The Hunger Games')
movies.splice(2,1, 'The Maze Runner')
movies.forEach( movie => {console.log(movie)})

// Couunt how many elements there are and find out what each one is
let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
console.log(colors.length)
console.log(typeof colors)
console.log(typeof colors.toString())

// Written in forEach() loop
colors.forEach(c => console.log(c))


/*
Challenge:
Check if you are working with an array
Flip the values within the array
Using a method only, print the values of the newly arranged array
*/

let arr = [1, 2, 3, 4, 5]
if (arr instanceof Array === true) {
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
}