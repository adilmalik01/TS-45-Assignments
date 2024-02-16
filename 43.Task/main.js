// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicianNames = ["David Copperfield", "Dynamo", "Houdini", "Penn", "Teller"];
console.log("This is all magician list :");
var show_magicians = function (magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log("".concat(name_1));
    }
};
// here greet funtion
function make_great(magicianNames) {
    var greet_message = magicianNames.map(function (greet) { return "hello how are you ".concat(greet); });
    // console.log(greet_message);
    return greet_message;
}
var modified_Array = make_great(magicianNames);
// without greet only array real
show_magicians(magicianNames);
// make_great
console.log(" \nhere greet funtion ");
show_magicians(modified_Array);
// this is original array 
console.log("\nthis is orginal array:");
console.log(magicianNames);
