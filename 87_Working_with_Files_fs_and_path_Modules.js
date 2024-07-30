const { error } = require('console');
const fs = require('fs')

console.log(fs);

// // Creating and Writing to File
console.log("Code Starts"); //Run First
// fs.writeFileSync("87_Test_File.txt", "Writing to File") //Run Second
// console.log("Code Ends");   //Run Third

fs.writeFile("87_File_2.txt", "Writing to File 2", () => {
    console.log("This will Run at the End");    //Run Last
    fs.readFile("87_File_2.txt", (error, data) => {
        console.log(error, data.toString());   // null (no error), 
    })
})

//Appending
fs.appendFile("87_File_2.txt", "\nAnother Line", (e, d) => {
    console.log(d);
})

console.log("Done");    //Run Second

// import path from "path"