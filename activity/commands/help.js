function helpExecutor(){
    console.log(`List of all commands are:
                1. view <dir-name> --tree
                2. view <dir-name> --flat
                3. organize <di-name>(optional)
                4. help`);
}

module.exports={
    helpFn:helpExecutor
}