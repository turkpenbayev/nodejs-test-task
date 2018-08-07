var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');    
});

app.get('/test', function (req, res) {
    obj = {name: 'Bauyrzhan', age: 21, sex: 'M'};
    res.render('test', {test_content: 'Test page', data: obj});    
});

app.get('/:id/:name', function (req, res) {
    res.send('id - '+req.params.id + ' name - '+req.params.name);
});

app.listen(3000, '127.0.0.1')