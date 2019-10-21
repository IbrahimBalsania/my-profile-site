const express = require('express');
const mBodyParser = require('body-parser');
const mFs = require('fs');
const mIP = require('ip');
const app = express();

// Middlewares
app.use(express.static('Core'))
app.use(mBodyParser.urlencoded({ extended: true }))
app.use(mBodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.end(mFs.readFileSync('./Core/Main.html'));
});

// Exception Handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Exception : Something broke!');
});

// Server Listen
app.listen(4000, () => {
    console.log("Server is listening on URL : http://"+mIP.address()+":4000");
});