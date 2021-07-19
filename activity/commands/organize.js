let fs=require("fs");

// let fse=require("fs-extra");
let type = require("D:\\Vishal Kumar PepCoding Web Dev\\1. File System organizer\\raw\\poc\\util");

let path=require("path");

function readContent(dirPath){
    return fs.readdirSync(dirPath);
}

function isFileChecker(dirPath){
    return fs.lstatSync(dirPath).isFile();
}

function checkFileTypes(filePath){
    let ext=path.extname(filePath);
    // console.log(path.basename(filePath)+" : "+ ext);
    for(let key in type.types){
        // console.log(types.);
        // console.log(type.types[key]);

        for(let i=0;i<type.types[key].length;i++){
            // console.log(types[key][i]);
            if(ext == type.types[key][i]){
                // console.log(ext+":"+ types[key][i]);
                return key;
            }
        }
    }
    return "others";
}

function organize(dirPath){
    let pathorg=path.join(dirPath,"Organized_Folders");
    if(!fs.existsSync(pathorg)){
        fs.mkdirSync(pathorg);
    }
    organizeExecutor(dirPath, pathorg);
}

function moveFile(srcDir, destDir){
    fs.copyFileSync(srcDir, destDir);
}

function organizeExecutor(dirPath, organizePath){
    let isFile=isFileChecker(dirPath);
    if(isFile){
        let fileType = checkFileTypes(dirPath);
        // console.log(fileType);
        let Folderpath=path.join(organizePath, fileType);
        
        if(!fs.existsSync(Folderpath)){
            fs.mkdirSync(Folderpath);
        }

        let dest= path.join(Folderpath, path.basename(dirPath));
        moveFile(dirPath, dest);
    }else{
        let children = readContent(dirPath);
        for(let i=0;i<children.length;i++){
            organizeExecutor(path.join(dirPath, children[i]), organizePath);
        }
    }

    // console.log("organize command eclxcecuted");
}

module.exports={
    organizeFn:organize
}