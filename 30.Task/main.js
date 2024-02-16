// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.'
// make Array 4 username and 1Admin ameen alam is admin 
var loginPortal = ["Admin", "Adil", "Asif", "okasha bhai", "Abdullah", "sir qasim", "sir bilal"];
// after login portal print message 
// make reusable this part
function CheckAdmin() {
    loginPortal.map(function (items, i) {
        items = items.toLowerCase();
        items.match("admin") ? ///// USE  ternary operator,
            console.log(" Hello admin, would you like to see a status report?") :
            console.log(" Hello ".concat(items, ", thank you for logging in again \n"));
    });
}
CheckAdmin();
