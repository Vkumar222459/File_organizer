// 4 commands
// view -> --tree, --flat
// organize -> smae folder, multiple folder
// help
// input -> node mycli.js view dirname tree
// node mycli.js organize dirname

let {viewFn}=require("./commands/view");
let {helpFn}=require("./commands/help");
let {organizeFn}=require("./commands/organize");

let input=process.argv.slice(2);
let cmnd=input[0];



switch(cmnd){
    case "view":
        viewFn();
        break;
    case "organize":
        organizeFn();
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Wrong commands, enter help to see all of the commands");
        break;
}