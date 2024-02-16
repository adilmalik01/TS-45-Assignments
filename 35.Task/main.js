"use strict";
// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a
// for loop to print out the name of each animal. • Modify your program to print a statement 
//   about each animal, such as A dog would make a great pet. 
//   • Add a line at the end of your program stating what these animals have in common.
//    You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Cats", "Monkey", "Horses", "Dogs"];
// here all animals
console.log("This is Animals List:");
for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    console.log(element);
}
let catDetail = " often keep themselves clean and have an interest in playing.";
let monkeyDetail = "are intelligent and curious, exhibiting quite complex social behaviors.";
let hourseDetail = " strength and stamina make them great companions for racing or riding.";
let dogsDetail = " are known for their loyalty and affection towards their owners.";
animals.forEach((animal) => {
    if (animal === "Cats") {
        console.log(`\n ${animal} ${catDetail} `);
    }
    else if (animal === "Monkey") {
        console.log(`\n ${animal} ${monkeyDetail} `);
    }
    else if (animal === "Horses") {
        console.log(`\n ${animal} ${hourseDetail} `);
    }
    else if (animal === "Dogs") {
        console.log(`\n ${animal} ${dogsDetail} `);
    }
});
// Any of these animals would make a great pet!
console.log('\n  Any of these animals would make a great pet!');
