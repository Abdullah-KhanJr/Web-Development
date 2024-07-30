// npm init // install personalized package
// npm install (package name) // install packages

var slugify = require('slugify')

let a = slugify('Backend, Node.js & npm') // Add (-) in place of empty spaces and commas
console.log(a);

let b = slugify("Backend, Node.js & npm", "_")  // Fill empty spaces and commas of own choice
console.log(b);


