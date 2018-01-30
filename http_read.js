var http=require('http');                                           //importing require modules
var fs=require('fs');
var url=require('url');

http.createServer(function(request,response){                         //Creating server

    var pathname=url.parse(request.url).pathname;                     //parse the fetched Url to get pathname

    console.log("Request for "+ pathname +" received");
    console.log('Path:'+ pathname.substr(1));

    fs.readFile(pathname.substr(1),function(err,data){                 //request file to read from file system
       
        if(err){
            console.log(err);
            response.writeHead(404,{'content-type':'text/html'});           //creating header with content type as textor html
        }else{
            response.writeHead(200,{'content-type':'text/html'});
            response.write(data);                            //generating response
        }
        response.end();
    });
}).listen(8080);