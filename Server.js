const express = require('express');
const mBodyParser = require('body-parser');
const mFs = require('fs');
const mIP = require('ip');
const app = express();
const port = process.env.PORT||3000;
// Middlewares
app.use(express.static('Core'))
app.use(mBodyParser.urlencoded({ extended: true }))
app.use(mBodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.end(mFs.readFileSync('/Core/Main.html'));
});

// Exception Handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Exception : Something broke!'+err.stack);
});

// Server Listen
app.listen(port, () => {
    console.log("Server is listening on URL : http://"+mIP.address()+":"+port);
});
