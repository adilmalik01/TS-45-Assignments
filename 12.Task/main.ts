//Greetings: Start with the array you used in Exercise 11,
//but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same,
//but each message should be personalized with the person’s name.



let friendsName: string[] = ["Azeem", "Ali", "Talal", "Sahil"]

//with foreach Loop
friendsName.forEach((name) => {
    let message = `hello ${name}! how are you guy's`
    console.log(message);
});



//with for of Loop
for (let friendName of friendsName) {
    console.log(`hello ${friendName}! how are you guy's`);
}









