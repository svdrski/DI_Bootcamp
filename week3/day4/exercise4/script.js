const users = ["Princess45", "Lea123", "Princess45", "cat&doglovers", "helooo@000", "Princess45"];

console.log(users.length);

switch (users.length) {
    case 0 :
        console.log("no one is online");
    break;

    case 1 :
        console.log(users[0] + " is online");
    break;

    case 2 :
        console.log(users[0] + " and " + users[1] + " are online");
    break;

    default:

    console.log(users[0] + ", " + users[1] + " and " + (users.length - 2) + " more are online");

    break;

}