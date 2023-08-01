let database = [
    {
        username: "Andr",
        password: "sercret"
    },

    {
        username: "Sally",
        password: "123"
    },

    {
        username: "indgird",
        password: "1234"
    },

    {
        username: "Holo",
        password: "1235"
    },
];


let newsFeed = [
    {
        username: "bobby",
        timeline: "So tiderf fasfkskf ff"
    },

    {
        username: "Sally",
        timeline: "Tra lala la "
    }
]

let userNamePrompt = prompt("whats your username");
let passwordPrompt = prompt("Whats your pass");


function userIsValid (username, password) {
    for (let i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true
        } 
    }
    return false
}

function signIn (username, password) {

    for (let i = 0; i < database.length; i++) {
        if (userIsValid(username, password)) {
            console.log("Welcome");
        } else {
            console.log("sorry")
        }
    }



    // if ( username === database[0].username &&  password === database[0].password){
    //     console.log(newsFeed)
    // } else {
    //     alert ("sorry") 
    // }
}


signIn(userNamePrompt, passwordPrompt);