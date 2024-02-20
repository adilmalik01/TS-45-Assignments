"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var personal_Guest = ["Sir Zia Khan", "Sir Ameen Alam", "Okasha Bhai", "Sir Daniyal Naghori"];
var whoCannotCome = personal_Guest.indexOf("Sir Zia Khan");
// declare who is not come on dinner
console.log("".concat(personal_Guest[whoCannotCome], "  can't come to dinner"));
var replacing_Guest = personal_Guest.splice(whoCannotCome, 1, "Kamran Khan tessori"); // adding new guest
// console.log(personal_Guest);
// console.log(replacing_Guest);
personal_Guest.forEach(function (guest) {
    console.log(" ".concat(guest, "\t\n You are invited to dinner ,we hope to see u there!"));
});
exports.default = personal_Guest;
