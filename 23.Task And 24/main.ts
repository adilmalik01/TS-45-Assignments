// Conditional Tests: Write a series of conditional tests.Print a statement describing each test and your prediction for the results of each test.Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'Audi A6'
console.log("Is car == 'Audi A6'? I predict True.")
console.log(car == 'Audi A6')

console.log("Is car == 'subaru'? I predict False.")
console.log(car == 'subaru')


console.log("Is car == 'Audi A6'? I predict True.")
console.log(car === 'Audi A6')


console.log("Is car == 'Audi A6'? I predict False.")
console.log(car === 'audi A6')

console.log("Is car == 'Audi A6'? I predict True.")
console.log(car === 'Audi A6')

console.log("Is car == 'Audi'? I predict False.")
console.log(car === 'Audi')


console.log("Is car !== 'Audi'? I predict True.")
console.log(car !== 'Audi')

console.log("Is car !== 'Audi A6'? I predict False.")
console.log(car !== 'Audi A6')

console.log("Is car !== 'Truck'? I predict True.")
console.log(car !== 'Truck')

console.log("Is car !== 'Audi A6'? I predict False.")
console.log(car !== 'Audi A6')





// Here TASK 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



let num1: number = 5;
let num2: number = 10;

console.log("Equality Test:");
console.log(num1 == num2); // False because 5 is not equal to 10
console.log("Inequality Test:");
console.log(num1 != num2); // True because 5 is not equal to 10
console.log("Greater Than Test:");
console.log(num1 > num2); // False because 5 is not greater than 10
console.log("Less Than Test:");
console.log(num1 < num2); // True because 5 is less than 10
console.log("Greater Than or Equal To Test:");
console.log(num1 >= num2); // False because 5 is not greater than or equal to 10
console.log("Less Than or Equal To Test:");
console.log(num1 <= num2); // True because 5 is less than or equal to 10

//"And" aur "or" operators using test :
let condition1: boolean = true;
let condition2: boolean = false;

console.log("And Operator Test:");
console.log(condition1 && condition2); // False (because both conditions are not true)
console.log("Or Operator Test:");
console.log(condition1 || condition2); // True (because at least one condition is true)

// array 
let array: number[] = [1, 2, 3, 4, 5];
let itemToFind: number = 3;

console.log("Item in Array Test:");
console.log(array.includes(itemToFind)); // True (because 3 is in the array)

// any item is not in array:
console.log("Item not in Array Test:");
console.log(!array.includes(6)); // True (because 6 is not in the array)








