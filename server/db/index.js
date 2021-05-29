// TODO: Establish connection to mysql database
var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'pokedex'
});

db.connect((err) => {
  if (err) {
    console.log('unsuccessful connection to database');
  } else {
    console.log('successfully connected to db')
  }
});

module.exports = db;