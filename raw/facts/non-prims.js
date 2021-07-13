// non-primitives -> function, arrays and objects
// functions
// no return types
// function defination
function hello(param){
    // console.log("yo bro ", param);
    return "be happy";
}

// function invokation
hello("vishal");
hello(10);
// json-> javascript object notation

// empty object
let obj={}

// object declaration
let cap={
    name:"steve",
    lastname:"Rogers",
    address:{
        city:"Manhattan",
        state:"New York"
    },
    age:36,
    isAvengers:false,
    movies: ['captain america', 'winter soldier', 'age of ultron'],
    sayhi: function(param){
        // console.log("cap says hi", param);
        return "blessings";
    }
}

// loop for traversing
for(let key in cap){
    // console.log("key : ", key, "| value : ", cap[key]);
    // console.log("key : ", key, "| value : ", cap.key);
}

// console.log(obj.abc);

//to get
// console.log(cap.name);
// console.log(cap.lastname);
// console.log("hi from cap", cap.sayhi("megha"));
let key='address';
// console.log(cap[key].state);

// console.log(cap);

// adding new key:value pairs
cap.friends = ["tony stark", "Bruce", "Romanoff", "thor"];
cap.address.city = 'paris';
// console.log(cap);

// delete object keys
delete cap.movies;

// console.log(cap);


// arrays
// arrays in java are homogeneous colleaction
// unlike in js, they are collection of multiple 
let arr=[
    1,
    1.1,
    null,
    true,
    "String",
    {
        name:"vishal",
        surname:"Kumar"
    },
    [1, 2, 3, 4, 5],
    function sayHi(){
        console.log("how are u?");
        return "any plans for weekend?";
    }
];

// get
// console.log(arr);
// console.log("value at index 3", arr[3]);
// console.log("value at index 7", arr[7]());
// let obj1=arr[5];
// console.log(obj1);

// // loop
// for(let i=0;i<arr.length;i++){
//     console.log("index : ", i, " value : ", arr[i]);
// }
// console.log("-------------------------------------");
// for(let key in arr){
//     console.log("key : ", key, " value : ", arr[key]);
// }

// update 
// arr[5]="hello";
// In js, array are nothing but emulated objects
// arr[10]="trust";
// console.log(arr);
// the length member in arrays in js can't be trusted because 
// length = last numeric key+1, which is wrong in some cases written below
// arr["last value"]=365;// this statement is allowed because there are no arrays in js only objects
// console.log(arr);
// console.log(arr.length);

const a=0;
const arr1=[1, 2, 3, 4, 5];
// arr1=[2, 3];        // not allowed as arr1 is constant and can't be changed but

console.log(arr1);
arr1.unshift(24);       // but u can change the elements of the array (heap and stack memory)
console.log(arr1);

// some inbuild methods in arrays are
// unshift -> add first;
// shift -> remove first;
// push -> add last;
// pop -> remove last;

// slice -> arr.slice(2, 4) = slice(startindex, endindex) endindex(exclusive)
// splice -> remove elements from arr= splice(index, deletecount) (index element included);
// split -> splits the string into string arr using a seperator;
// join -> return joined string from string arr using is joiner
let slicedarr=arr.slice(2, 4);
let splicedarr=arr.splice(2, 2);
let str="hello buddy, this is a string";

let Stringarr=str.split(" ");
console.log(Stringarr);

let joinedarr = Stringarr.join("_");
console.log(joinedarr);