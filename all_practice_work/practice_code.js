// console.log('Hello World');
// console.log("I am a Flutter and Mobile Applicaiton Developer having 4+ years of experience in Industry") // This console.log and JS console.log is not Same.
// Difference is that This console.log is the part of the Node Js modules while JS console.log is a part of run time env


/*
// Core Modules


// Using global variables
console.log("File Name:", __filename);
console.log("Directory Name:", __dirname);

//Using process
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);


//File System (fs)
const fs = require("fs");

// Write file
fs.writeFileSync("test.txt", "Hello Node.js");

// Read file
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);


//HTTP Module 

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node Server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});


// Path Module

const path = require("path");

console.log("File Name:", path.basename(__filename));
console.log("Directory:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));

// OS Module

const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

// URL Module
const url = require("url");

const myUrl = new URL("https://example.com:8000/about?name=adil");

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("name"));

// Crypto Module
const crypto = require("crypto");

const hash = crypto.createHash("sha256")
  .update("password123")
  .digest("hex");

console.log("Hash:", hash);

*/


// Create Server in Node Js

//Basic HTTP Server

/*
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World from Node.js Server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});



//Server with Routing (Important)
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
  } else if (req.url === "/about") {
    res.write("About Page");
  } else {
    res.write("404 Page Not Found");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server running...");
});



//Sending JSON Response (API style)

const http = require("http");

const server = http.createServer((req, res) => {
  const user = {
    name: "Adil",
    age: 25
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(user));
});

server.listen(3000, ()=> {
    console.log('Server is listening on 3000 Port');
});


//Serving an HTML Page
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <h1>Welcome</h1>
    <p>This is a Node.js server</p>
  `);

  res.end();
});

server.listen(3000, ()=> {
    console.log('Server is listening on Port 3000');
});

*/


// Create API with Static Data

const http = require("http");

// Static Data (Fake Database)
const users = [
  { id: 1, name: "Adil", age: 25 },
  { id: 2, name: "Ali", age: 28 },
  { id: 3, name: "Sara", age: 22 }
];

const server = http.createServer((req, res) => {

  // Set common headers
  res.setHeader("Content-Type", "application/json");

  // Route: GET /api/users
  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify(users));
  }

  // Route: GET /api/users/1 (single user)
  else if (req.url.startsWith("/api/users/") && req.method === "GET") {
    const id = parseInt(req.url.split("/")[3]);
    const user = users.find(u => u.id === id);

    if (user) {
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "User not found" }));
    }
  }

  // Route not found
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// Start Server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
