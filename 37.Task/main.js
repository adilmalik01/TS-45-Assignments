/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
 that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
  and a shirt of any size with a different message.
*/
//This is Simple function this is return a string
function make_shirt(size, message) {
    console.log("title:".concat(message, ", size:").concat(size, " \n "));
    return "title:".concat(message, ", size:").concat(size, " \n ");
}
make_shirt("large", "I love Typescript");
// here we are use arraw funtion arrow funtion is introduced in Es6 
var new_shirt = function (message, size) {
    console.log("title:".concat(message, ", size:").concat(size, " \n "));
};
new_shirt("Keep Smiling", "Medium");
