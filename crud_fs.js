console.log("We Will Talk About Crud Operation in JS in this Part");

console.log("CRUD Operation in JS");

const fs = require('fs');

const path = require('path');

const myCRUDPath = path.join(__dirname, "CRUD");

const myPath = `${myCRUDPath}/crud.txt`;

// CREATE

// fs.writeFileSync(myPath, "Create Read Update Delete");

// Read
// Interview Question :> when performing read operation the value are Readed as Buffer  and showm at the form of HexaDecimal.
// To resolve this we can used simply this .toString or simply  'utf8'

// fs.readFile(myPath, 'utf8', (error, file)=>{
// console.log(file);
// });


//Update 

// fs.appendFile(myPath, " in Node JS", (error)=>{
//     if(!error){
//         console.log('your File is Updated Successfully');
//     }
// })


// delete   super easy

fs.unlinkSync(myPath);