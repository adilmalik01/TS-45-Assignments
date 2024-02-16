// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
// empty array case 

let loginPortalUser:string[] =["Admin", "Adil", "Asif", "okasha bhai", "Abdullah", "sir qasim"] 


function userHandler(loginPortalUser:string[]){
 
    if(loginPortalUser.length === 0){
       console.log("we are find to user !"); 
        return;  
    }else{
        loginPortalUser.map((items, i) => {
        items = items.toLowerCase();
        items.match("admin ameen alam") ? ///// USE  ternary operator,
            console.log(" Hello admin, would you like to see a status report?") :
            console.log(` Hello ${items}, thank you for logging in again \n`);
        })   
    }
   
}


// without empty arrray
console.log("\n\n array is not empty : \n");
userHandler(loginPortalUser)

loginPortalUser = []


//with empty array
console.log("\n\n array is empty : \n");
userHandler(loginPortalUser)















