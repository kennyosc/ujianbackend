const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user:'kennyosc',
        password:'K3nnymysql',
        host:'127.0.0.1',
        database:'ujianbackend',
        port:3306
    }
)

module.exports = conn