// T-Shirt: Write a function called make_shirt() that accepts a size and the text of 
// a message that should be printed on the shirt. The function should print a sentence
//  summarizing the size of the shirt and the message printed on it. Call the function.
var new_shirt = function (message, size) {
    console.log("title:".concat(message, ", size:").concat(size, " \n "));
};
new_shirt("Keep Smiling", "Medium");
// WITH ARRAY OR OBJECT Multiple shirts
var shirtObject;
var shirts = [];
shirts.push({
    name: "Stay positive",
    size: "Extra large"
});
shirts.push({
    name: "Keep Smiling",
    size: "large"
});
shirts.push({
    name: "Calm Down",
    size: "Madium"
});
shirts.push({
    name: "Keep it Up",
    size: "small"
});
shirts.push({
    name: "Hustle Hard",
    size: "Extra Hard"
});
//THis is Branded shirts
console.log('This is branded shirts:');
var printShirt = function (shirts) {
    shirts.forEach(function (shirt) {
        console.log("\n         title : ".concat(shirt.name, ",\n         Size : ").concat(shirt.size, "\n         --------------------------\n\n        "));
    });
};
printShirt(shirts);
