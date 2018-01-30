var fs=require ("fs");

fs.readFile('textfile.txt', function(err,data){
    if(err){
	   return console.error(err);
	 }
	 console.log("Read Data: "+ data.toString());
});
console.log("Program Ended");
	   