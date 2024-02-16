// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
