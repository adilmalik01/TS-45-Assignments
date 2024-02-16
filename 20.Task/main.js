/*
 Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.
*/
var rivers_Name = ["Chenad", "Sutlaj", "Sindh", "Ravi"];
console.log(rivers_Name);
for (var _i = 0, rivers_Name_1 = rivers_Name; _i < rivers_Name_1.length; _i++) {
    var river = rivers_Name_1[_i];
    console.log('river', river);
}
