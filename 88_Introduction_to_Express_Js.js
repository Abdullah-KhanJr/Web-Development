const exp = require('constants');
const express = require('express');
const app = express()
const port = 3000;

//  Make all files in the Elememts folder publically accesible
// app.use(express.static('Elements'))

app.get('/', (req, res) => {
    res.send('Hello World\n');
});

app.get('/about', (req, res) => {
    res.send('About Us\n');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us\n');
});

app.get('/blog', (req, res) => {
    res.send('Edit Blog\n');
});

app.get('/blog/:slug', (req, res) => {
    // console.log(req) will display list of all the req parameters
    console.log(req.params);
    console.log(req.query);
    res.send(`Introduction to ${req.params.slug}`);
});

app.get('/blog/intro_to_python', (req, res) => {
    res.send('Intorduction to Python\n');
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});