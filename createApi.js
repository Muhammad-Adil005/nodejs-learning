console.log("Create Apis in Node Js");
const http = require('http');
const data = require('./employeeData');


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application\json'});
    // res.write(JSON.stringify({name: 'Adil', dep: 'CS'}));
     res.write(JSON.stringify(data));
    res.end();
}).listen(3000);