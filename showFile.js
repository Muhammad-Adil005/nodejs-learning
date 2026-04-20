console.log("Display Files using path package/module");

const fileSystem = require('fs');

fileSystem.writeFileSync('show.txt', 'Node JS Tutorial');

// issue is that how to create a file inside a folder or create multiple files. yes we can do by using path module

// To get path of any folder/file, we can used core Module called path

const path = require('path');

// const myFolder = path.join(__dirname, 'myfolder');

// console.log(`Path of myFolder is == ${myFolder}`);

// for (let i = 0; i<3; i++){
//     fileSystem.writeFileSync(`${myFolder}/show${i}.txt`, "This is File No: "+ i);
// }


// To Read File we can used readDir 

fileSystem.readdir(myFolder, (error, items) => {
    console.log(`Items will be == ${items}`);
});