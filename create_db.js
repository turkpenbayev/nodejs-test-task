var mysql = require('mysql');
var randomstring = require("randomstring");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456b",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255), number VARCHAR(255), email VARCHAR(255), work VARCHAR(255), status VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    var sql = "INSERT INTO customers (name, address, number, email, work, status) VALUES ?";
    var name, address, number, email, work, status, values;
    for (var i=0; i<7500; i++){  
        name = randomstring.generate(4);
        address = randomstring.generate(7);
        number = randomstring.generate(8);
        email = randomstring.generate(6);
        work = randomstring.generate(4);
        status = randomstring.generate(4);
        values = [
            [name, address, number, email, work, status],
            [name, address, number, email, work, status]
        ];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + (i+1));
        });
    }

    

  });