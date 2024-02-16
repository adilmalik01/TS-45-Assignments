// Name Cases: Store a person’s name in a variable, and then print that
//  person’s name in lowercase, uppercase, and titlecase.

// solution 

let hero: string = "Quaid e Azam"

// convert in lowerCase
console.log("lowwercase:", hero.toLowerCase());

// convert in upperCase
console.log("UPPERCASE:", hero.toUpperCase());


// convert in titleCase

let toTitleCase: string = "muhammad adil malik asif malik"

let titleCaseSplit: string[] = toTitleCase.split(" ") // yahan mane string ko array me change kia 

let finalTitleCase = "" // ye hamari final result div he jisme sara data ayega titleCase ban kr 


// with FOREACH LOOP 
titleCaseSplit.forEach((char) => {
    finalTitleCase += char.charAt(0).toUpperCase() + char.slice(1).toLowerCase() + " "
})

// WITH FOR LOOP

// for (let i = 0; i < titleCaseSplit.length; i++) {
// finalTitleCase += titleCaseSplit[i].charAt(0).toUpperCase() + titleCaseSplit[i].slice(1).toLowerCase() + " "
// }

console.log("Title Case :", finalTitleCase);



