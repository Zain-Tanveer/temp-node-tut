// GLOBALS - NO WINDOW!!!

// _dirname  - path to current directory
// _filename - file name
// require   - function to use modules (CommonJS)
// module    - info about current module (file)
// process   - infor about env where program is being executed

console.log(__dirname);

setInterval(()=>{
    console.log(`Hello World`);
}, 1000)
setTimeout(()=>{
    console.log("Timeout function");
}, 3000)