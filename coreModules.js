const myFile = require('fs');


console.log("This is Related to Core Modules in JS");

// Core Modules:> just like in C/C++, Print, Cout, Cin which is built in no need to create it you have to just used it.

// Same is Node js there is Core Modules , like console.log this is called core Modules in node js. There is alots of core modules in  node js.


// From this Site :> https://nodejs.org/docs/latest/api/   You can see all the Core Modules 


// Global Vs Non-Global Modules. Global core modules are those who not need to import it. like we used console.log. Non-Global are those whose can be imported like fs



myFile.writeFileSync("coreModules.txt", "Node JS Core Module Tutorial");