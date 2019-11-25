require('http').createServer((req,res) =>{
    const obj ={name: 'zs'};
    const cbName = require('url').parse(req.url, true).query.callback;
    res.end(cbName + '(' + JSON.stringify(obj) + ')');
}).listen(8081);