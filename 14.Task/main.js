// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite ? Make a list that includes at least three people you’d
// like to invite to dinner.Then use your list to print a message to each person,
// inviting them to dinner.
var personal_Guest = ["Sir Zia Khan", "Sir Ameen Alam", "Okasha Bhai", "Sir Daniyal Naghori"];
personal_Guest.forEach(function (guest) {
    console.log(" ".concat(guest, " You are invited to dinner please Join and make a Night"));
});
for (var i = 0; i < personal_Guest.length; i++) {
    console.log(" ".concat(personal_Guest[i], " You are invited to dinner please Join and make a Night"));
}
