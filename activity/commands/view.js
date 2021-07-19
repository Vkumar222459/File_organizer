let path=require("path");
let fs=require("fs");

function viewExecutor(dirPath, mode){
    switch(mode){
        case "tree":
            viewTree(dirPath, "");
            console.log("Tree View implemented");
            break;
        case "flat":
            viewFlat(dirPath);
            console.log("Flat View implemented");
            break;
        default:
            console.log("Wrong Command");
            break;
    }
    // console.log("view command excecuted");
}

function isFileChecker(dirPath){
    return fs.lstatSync(dirPath).isFile();
}

function readContent(dirPath){
    return fs.readdirSync(dirPath);
}

function viewTree(dirPath, indent){
    let isFile=isFileChecker(dirPath);
    if(isFile){
        console.log(indent+path.basename(dirPath)+"*");
    }else{
        console.log(indent+dirPath);
        let children = readContent(dirPath);
        for(let i=0;i<children.length;i++){
            viewTree(path.join(dirPath, children[i]), indent+"\t");
        }
    }
}

function viewFlat(dirPath){
    let isFile=isFileChecker(dirPath);
    if(isFile){
        console.log(dirPath+"*");
    }else{
        console.log(dirPath);
        let children = readContent(dirPath);
        for(let i=0;i<children.length;i++){
            viewFlat(path.join(dirPath, children[i]));
        }
    }
}

module.exports={
    viewFn:viewExecutor
}