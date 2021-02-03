const mysql = require("mysql");
const config = require("../configs/index");
// createConnection will take db configuration such as username, password in the form of JSObject.
const connection = mysql.createPool({
    host: config.dataBase.host,
    user: config.dataBase.user,
    password: config.dataBase.password,
    database: config.dataBase.dataBase
})

module.exports = connection;
