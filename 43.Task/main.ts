// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let magicianNames: Array<string> = ["David Copperfield", "Dynamo", "Houdini", "Penn", "Teller"]

console.log("This is all magician list :");
const show_magicians = (magicianNames: string[]): void => {
    for (const name of magicianNames) {
        console.log(`${name}`);
    }
}

// here greet funtion
function make_great(magicianNames: string[]): string[] {
    let greet_message: Array<string> = magicianNames.map(greet => `hello how are you ${greet}`)
    // console.log(greet_message);
    return greet_message
}

let modified_Array: string[] = make_great(magicianNames)



// without greet only array real
show_magicians(magicianNames)



// make_great
console.log(" \nhere greet funtion ");
show_magicians(modified_Array)
// this is original array 
console.log("\nthis is orginal array:");
console.log(magicianNames);



