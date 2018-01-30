var fs=require ("fs");

var data=fs.readFileSync('textfile.txt')
   
console.log("Read Data: "+ data.toString());

console.log("Program Ended");
