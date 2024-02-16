// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
// here I am adding white space 
var whiteSpaceName = "\t\n  adil malik    \n\t";
// here I am removing the white space with trim() funtion
var removeSpace = whiteSpaceName.trim();
console.log(removeSpace);
