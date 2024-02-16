/*
 Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like. 
 Write a program that creates a list containing these items.
*/

const rivers_Name: string[] = ["Chenad", "Sutlaj", "Sindh", "Ravi"]

console.log(rivers_Name);

for (let river of rivers_Name) {
    console.log('river', river);
}
