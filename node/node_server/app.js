const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }else if(request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }else if(request.url === '/dojos/new') {
        fs.readFile('dojos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }else if(request.url === '/style.css' || request.url === '/dojos/style.css' ) {
        fs.readFile('style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'}); 
            response.write(contents); 
            response.end(); 
        });
    }
    else {// request didn't match anything
        response.writeHead(404);
        response.end('The URL requested is not available.!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
