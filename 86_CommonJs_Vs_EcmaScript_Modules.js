// const http = require('node:http');   // require used for common.js
// import use for module (ECMA (ES6))

// import {a} from "./86_modules.js"
// import {a, b} from "./86_modules.js" 
// console.log(a);

// import obj from "./86_modules.js"
// console.log(obj);

const a = require("./86_modules")
console.log(a);
// import http from "http"
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World\n</h1>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });