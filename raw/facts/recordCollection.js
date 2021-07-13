// Setup
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    let obj = records[id];
    if (value == "") {
        delete obj[prop];
    } else if (prop !== "tracks") {
        if (value != "") {
            obj[prop] = value;
        }
    } else if (prop == "tracks") {
        if (obj[prop] == undefined) {
            obj[prop] = [value];
        } else if (value !== "") {
            obj[prop].push(value);
        }
    }
    return records;
}

console.log(recordCollection);
let ans = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log("---------------------------------------------------");
console.log(ans);