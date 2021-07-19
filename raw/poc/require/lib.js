function fn(){
    console.log("hi i am a function inside lib.js!");
    return "true";
}

let a =false;

module.exports={
    func:fn,
    varname:a
}