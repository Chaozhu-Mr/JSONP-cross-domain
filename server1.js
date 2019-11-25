require('http').createServer((req,res) =>{
    res.end(require('fs').readFileSync('./index.html'));
}).listen(8080);