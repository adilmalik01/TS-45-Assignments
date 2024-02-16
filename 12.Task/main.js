//Greetings: Start with the array you used in Exercise 11,
//but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same,
//but each message should be personalized with the person’s name.
var friendsName = ["Azeem", "Ali", "Talal", "Sahil"];
//with foreach Loop
friendsName.forEach(function (name) {
    var message = "hello ".concat(name, "! how are you guy's");
    console.log(message);
});
//with for of Loop
for (var _i = 0, friendsName_1 = friendsName; _i < friendsName_1.length; _i++) {
    var friendName = friendsName_1[_i];
    console.log("hello ".concat(friendName, "! how are you guy's"));
}
