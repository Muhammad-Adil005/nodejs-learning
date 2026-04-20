console.log('Create Server in JS');

// we used Non-Global core Module http to create a server in Javascript

const http = require('http');


http.createServer((request, response)=>{ // req, res
    response.writeHead(200, {  // Interview Question:> why we used writeHead or if we can't used writeHead then what issue we can face in our program.
        'Content-Type': 'text/html'
    });
    response.write("<h2>Hello From Node JS</h2>");
    response.end();
}).listen(1000);

// Interview Question :> Write Head Importance :> To Render Html style content we used it

 