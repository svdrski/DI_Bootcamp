const people = ["Greg", "Mary", "Devon", "James"];

people.splice("Greg",1);
console.log(people);

people[2] = "Jason";
console.log(people);

people.push("Hleb");
console.log(people);

console.log(people.indexOf("Mary"));

let peoplecopy = people.slice(1,3);

console.log(peoplecopy);

console.log(people.indexOf("Foo")); /// because there is no Foo

let last = people[people.length - 1];

console.log(last);



for ( let i of people) {
    console.log(i)

    if (i === "Devon") {
        break;
    }
} 