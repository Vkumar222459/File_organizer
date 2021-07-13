// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
    for(let i=0;i<contacts.length;i++){
        let person = contacts[i];
        let a = (person.firstName == name);
        let b = (person[prop]==undefined);
        if(a && !b){
            return person[prop];
        }else if(b){
            return "No such property";
        }
    }

    return "No such contact";
    // return "No such contact";
  // Only change code above this line
}

// let ans=lookUpProfile("Akira", "likes");
let ans=lookUpProfile("Bob", "potato")
console.log(ans);