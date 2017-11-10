const fs = require('fs');

//Done

// Enter the file path as first argument, e.g.,
// $ node copy.js /path/to/dummy.txt
let f = process.argv[2]; //pathToFile

// TODO: Create a readable stream from file f

// let test = fs.readFile(f, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(data);
//
// });

let input = fs.createReadStream(f, { encoding: 'utf8' });


// TODO: Create a writable stream that creates a
// new file with the original file path f
// plus the ending '-copy'


console.log(f);
var a = f.toString().split(".");
var newPath = a[0] + "-copy.txt";
console.log(newPath);
let writable = fs.createWriteStream(newPath);

input.pipe(writable);
// TODO: Copy the content from f to f-copy

