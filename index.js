const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile('./pages/index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else if(req.url === '/about'){
        fs.readFile('./pages/about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else if(req.url === '/contact-me'){
        fs.readFile('./pages/contact-me.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else{
        fs.readFile('./pages/404.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
    }
});