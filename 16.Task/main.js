// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var personal_Guest = ["Sir Zia Khan", "Sir Ameen Alam", "Okasha Bhai", "Sir Daniyal Naghori"];
// declare who is not come on dinner
console.log("".concat(personal_Guest[0], "  can't come to dinner"));
var replacing_Guest = personal_Guest.splice(0, 1, "Kamran Khan tessori"); // adding new guest
// console.log(replacing_Guest);
personal_Guest.forEach(function (guest) {
    console.log("".concat(personal_Guest, "Great news! We've found a bigger dinner table!"));
}); ///// big table book
personal_Guest.push("Sir Inzammam Malik"); // add new guest start
personal_Guest.unshift("Sir Saad Ali"); // add new guest last
personal_Guest.splice(Math.floor(personal_Guest.length / 2), 0, "Sir Qasim");
console.log(personal_Guest);
personal_Guest.forEach(function (guest) {
    console.log(" ".concat(guest, "\t\n You are invited to dinner ,we hope to see u there!"));
});
