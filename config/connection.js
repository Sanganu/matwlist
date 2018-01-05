var mysql = require("mysql");





// When Running on Heroku

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'hacktheplanet',
    database: 'todoadain_db'
  });
};


connection.connect(function(err){
   if (err) throw err;
   console.log('MYSQL - Connected as id: '+ connection.threadId);
});

module.exports = connection ;
