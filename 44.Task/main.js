// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(recipe) {
    if (recipe.length > 0) {
        console.log("this is the recipe :");
        //here foreach loop make a list for recipe
        recipe.forEach(function (make, i) {
            console.log("".concat(i + 1, ".").concat(make));
        });
        console.log('\n');
    }
    else {
        console.log("please write some recipe ");
    }
}
makeSandwich(["tomato", "chicken", "mayounise"]); // parametar with array 
makeSandwich(["china", "cheese"]);
makeSandwich(["bannaa", "jelly", "mango", "pineapple"]);
makeSandwich([]); // here check error
// this is watching youtube here using same method but parametar in string and argument
// argument is rest parameter
// function makeSandwich(...recipe: string[]): void {
//     console.log("this is the recipe :");
//     //here foreach loop make a list for recipe
//     recipe.forEach((make, i) => {
//         console.log(`${i + 1}.${make}`);
//     })
//     console.log('\n');
// }
// makeSandwich("tomato", "chicken", "mayounise");
// makeSandwich("china", "cheese");
// makeSandwich("bannaa", "jelly", "mango", "pineapple");
