// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
var describe_city = function (city, country) {
    return "such a ".concat(city, " in ").concat(country);
};
//1
console.log(describe_city("islamabad", "pakistan"));
//2
console.log(describe_city("paris", "France"));
//3
console.log(describe_city("Moscow", "Russia"));
