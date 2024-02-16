// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var CarProperties = function (manifacurer, model) {
    var detail = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        detail[_i - 2] = arguments[_i];
    }
    var carData = {
        manufacturer: manifacurer,
        model: model
    };
    for (var _a = 0, detail_1 = detail; _a < detail_1.length; _a++) {
        var _b = detail_1[_a], key = _b[0], value = _b[1];
        carData[key] = value;
    }
    return carData;
};
console.log(CarProperties("Honda", "Civic")); // here without detail paremeteer
console.log(CarProperties("Honda", "Civic", ["color", "green"])); // here without detail paremeteer
