"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let define arary magician names 
let magicianNames = ["David Copperfield", "Dynamo", "Houdini", "Penn", "Teller"];
const show_magicians = (magicianNames) => {
    for (const name of magicianNames) {
        console.log(name);
    }
};
show_magicians(magicianNames);
