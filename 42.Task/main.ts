// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.



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


