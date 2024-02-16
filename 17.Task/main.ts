// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



let personal_Guest: Array<string> = [
    "Sir Saad Ali", "Kamran Khan tessori", "Sir Ameen Alam",
    "Okasha Bhai", "Sir Qasim", "Sir Daniyal Naghori",
    "Sir Inzammam Malik",
]

console.log(personal_Guest);

//print message for invite only two members
for (let guest of personal_Guest) {
    // console.log(`${guest} I can Invite ONly Two Members For Dinner.\n\t`);
}


// remove person in arrray
while (personal_Guest.length > 2) {  // check condition if length grater then 2 so remove All values without 2 length
    let removed_Person = personal_Guest.pop()
    console.log(`Sorry ${removed_Person} I can't invite you For dinner.`);
}

// send message for two persons
personal_Guest.forEach((stillGuest) => {
    console.log(`still you are ${stillGuest} invited for a dinner.`);
})



// Now empty array
let empty_Array = personal_Guest.splice(personal_Guest.length, 0)
console.log(`guest list after dinner ${empty_Array}:`); // here []




















