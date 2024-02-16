// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transport_models = [];
transport_models.push("Porsche");
transport_models.push("Honda Civic");
transport_models.push("Ferrari");
transport_models.push("McLaren 600 GT");
// here I am using for of loop to all array string save in models variable and print message
for (var _i = 0, transport_models_1 = transport_models; _i < transport_models_1.length; _i++) {
    var models = transport_models_1[_i];
    console.log("\u201CI would like to own a ".concat(models, ".\u201D"));
}
