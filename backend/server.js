'use strict';

const express = require('express');

// Constants
const PORT = 8080;
var address;
require('dns').lookup(require('os').hostname(), function (err, add) {
     address = add;
});

// App
const app = express();
app.get('/backend', function (req, res) {
    res.send('Hello from ' + address);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);