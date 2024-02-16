/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
 that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
  and a shirt of any size with a different message.
*/

//This is Simple function this is return a string
function make_shirt(size: String, message: string): string // we are use string beceause funtion is return the string
{                                                  // if we are return any funtion and nothing in funtion So I can use void method
    console.log(`title:${message}, size:${size} \n `);
    return `title:${message}, size:${size} \n `
}

make_shirt("large", "I love Typescript")




// here we are use arraw funtion arrow funtion is introduced in Es6 
const new_shirt = (message: string, size: string): void => {
    console.log(`title:${message}, size:${size} \n `);
}

new_shirt("Keep Smiling", "Medium")

