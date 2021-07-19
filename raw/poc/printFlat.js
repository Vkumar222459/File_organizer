// file system -> nodejs modules
// require the file system module from nodejs
let fs=require("fs");

// this function checks whether the directory is file of folder
function isFIleChecker(dirPath){
    return fs.lstatSync(dirPath).isFile();
}

// to read the content of the directory
function readContent(dirPath){
    return fs.readdirSync(dirPath);
}

function viewFlat(dirPath){
    // path
    // we need to chek whether the directory contains a file or a folder
    // to do so we will use some nodejs modules
    // isFileChecker -> function that tells us wether its a file or a folder

    let isFile = isFIleChecker(dirPath);
    if(isFile){
        console.log(dirPath+"*");
    }else{
        // directory
        console.log(dirPath);
        let children=readContent(dirPath);
        for(let i=0;i<children.length;i++){
            viewFlat(dirPath + "/"+children[i]);
        }
        // console.log(children);
    }
}

viewFlat("d10");