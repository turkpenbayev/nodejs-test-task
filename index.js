var express = require('express');
var mysql = require('mysql'); 
var paginate = require('express-paginate');

var app = express();

app.set('view engine', 'ejs');
app.use(paginate.middleware(10, 50));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456b",
    database: "mydb"
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');    
});

app.get('/test', function (req, res) {
   
    con.connect(function(err) {
        con.query("SELECT * FROM customers", function (err, result, fields) {
            if (err){
                console.log('error');
            }else{
                res.render('test', {test_content: 'Test page', data: result}); 
            }
        });
    });   
});

app.listen(4444, function () {
    console.log('Example app listening on port 4444 and localhost!');
});