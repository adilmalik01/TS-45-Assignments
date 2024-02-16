// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users: string[] = ["adil", "Asif", "Ali", "AZEEM", "Sahil", "talal"]

let new_users: string[] = ["abdullah", "Asif", "shahzaib", "azeem", "abid", "TALAL"]

function checkExistUser(current_users: string[], new_users: String[]): void {
    // here change lowercase and store in variable 
    let cureentUsertoLower = current_users.map(exist => exist.toLowerCase())

    new_users.forEach((item) => {
        // convert new user in lowercase
        let newusertoLower = item.toLowerCase()

        // here check  username is exist so print alert
        if (cureentUsertoLower.includes(newusertoLower)) {
            console.log(`${item} This username is alreay Exist \n`);
        } else {
            console.log(`${item} This username is Availbe \n`);
        }
    })
}

checkExistUser(current_users, new_users)









