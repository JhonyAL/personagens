const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'react'
});

const PORT = 3001

app.use(cors())

app.get('/', (req, res) => {

    connection.query('SELECT * FROM characters', function (error, results, fields) {
        // if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        var response = results[0]
        res.json(response)
    });
  

})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
