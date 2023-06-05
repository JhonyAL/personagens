const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

const PORT = 3001

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'react'
});

app.get('/', (req, res) => {

    connection.query('SELECT * FROM characters', (err, results, fields) => {
        res.json(results[0])
    })

})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})