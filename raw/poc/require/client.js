// require -> node
// way 1 to require the object
let libFileObj=require("./lib.js");

// another way to require the object
let {func, varname}=require("./lib.js");
console.log(func());

// js
console.log(libFileObj.func());
console.log(libFileObj.varname);