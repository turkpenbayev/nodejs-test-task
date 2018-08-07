var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('index page');    
});

app.get('/test', function (req, res) {
    res.send('test page');    
});

app.get('/:id/:name', function (req, res) {
    res.send('id - '+req.params.id + ' name - '+req.params.name);
});

app.listen(3000, '127.0.0.1')