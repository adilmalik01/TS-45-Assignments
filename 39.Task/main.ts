// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.



const city_country =
    (city: string, country: string)
        : string => {
        return `such a ${city} in ${country}`
    }

//1
console.log(city_country("islamabad", "pakistan"));
//2
console.log(city_country("paris", "France"));
//3
console.log(city_country("Moscow", "Russia"));





