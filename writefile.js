var fs=require("fs");
console.log("write inthe file");
 fs.writeFile('textfile.txt', 'Hi Navneet! whats Up', function(err,data){
 
   if(err){
        console.err(err);
	}
    console.log("Data has successful Inserted");
});	