// file system -> nodejs modules
// require the file system module from nodejs
let fs=require("fs");
let path=require("path");
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

// viewFlat("D:\\java workspace");

function viewTree(dirPath, indent){
    let isFile = isFIleChecker(dirPath);
    if(isFile){
        console.log(indent+path.basename(dirPath));
    }else{
        console.log(indent+path.basename(dirPath));
        let children=readContent(dirPath);
        for(let i=0;i<children.length;i++){
            viewTree(path.join(dirPath,children[i]),indent+"\t");
        }
    }
}
// viewTree("C:\\Users\\VISHAL kUMAR\\OneDrive\\Documents", "");
viewTree("C:\\Users\\VISHAL kUMAR\\OneDrive\\Desktop\\d10", "");