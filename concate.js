var buf1 = new Buffer('Hello Navneet!');
var buf2 = new Buffer('Hello Mukund');

//Concatenate 
var buf3 = Buffer.concat([buf1,buf2]);
console.log("Buffer content: " + buf3.toString());

//Copmpare
var temp= buf1.compare(buf2);
if(temp < 0) {
   console.log(buf1 +" comes before " + buf2);
}else if(temp == 0){
   console.log(buf1 +" is same as " + buf2);
}else {
   console.log(buf1 +" comes after " + buf2);
}


//copy a string to another

buf2.copy(buf1);
console.log("Copyed Content :"+buf1.toString());
