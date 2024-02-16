/*
User
Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities,at least one of which is not in the default country
*/
var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("such a ".concat(city, " in ").concat(country));
};
// first one default value and one "karachi "
describe_city("karachi");
// second we define both value 
describe_city("Ghaza", "Palestine");
//  
describe_city("UAE", "America");
