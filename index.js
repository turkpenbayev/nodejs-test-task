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
function getResult(){
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields) {
            if (err) throw err;
            return result;
        });
    });
} 


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');    
});

app.get('/test', function (req, res) {
    obj = getResult();
    res.render('test', {test_content: 'Test page', data: obj});    
});

app.listen(3000, '127.0.0.1')