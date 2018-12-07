// i is set to 0, i ++ is the increment and will count by 1 until it gets to 9 (i < 10)
for (var i = 0; i < 10; i ++) {
    console.log(i)
}



// Challenge - Using a for loop, count to 20 by 2's
// Starting point     Ending point     What to count by
for (var i = 0;       i <=20;              i+=2) {
    console.log(i)
}

// Challenge - Using a for loop, count from 10 to 0, going down
for (var i = 10; i >= 0; i--) {
    console.log(i)
}

// Challenge - Using a for loop, count from 0 to -24 going down by 2's
for (var i = 0; i >= -24; i -= 2) {
    console.log(i)
}

// Challenge - Using a for loop, go through a name and display each letter individually
let name = "Mitchell"

for (var i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}

// Challenge - Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
let sum = 0

for (i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum)


// Challenge
// We don't need to have a function, but it's good practice
function fizzBuzz() {
    for (var i =0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz")
        }
        else if (i % 5 === 0)  {
            console.log("Buzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz();