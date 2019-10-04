const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }else if(request.url === '/cars/new') {
        fs.readFile('views/newCar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(contents); 
            response.end(); 
        });
    }else if(request.url === '/stylesheets/style.css' || request.url === '/cars/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
    }else if(request.url === '/images/red.jpg'){
        // notice we won't include the utf8 encodingcopy
        fs.readFile('./images/red.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/brown.jpg'){
        // notice we won't include the utf8 encodingcopy
        fs.readFile('./images/brown.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/green.jpg'){
        // notice we won't include the utf8 encodingcopy
        fs.readFile('./images/green.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/c1.jpg'){
        // notice we won't include the utf8 encodingcopy
        fs.readFile('./images/c1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/c2.jpg'){
        // notice we won't include the utf8 encodingcopy
        fs.readFile('./images/c2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url === '/images/c3.jpg'){
        // notice we won't include the utf8 encodingcopy
        fs.readFile('./images/c3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else {// request didn't match anything
        response.writeHead(404);
        response.end('The URL requested is not available!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
