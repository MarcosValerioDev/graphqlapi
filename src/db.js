async function connect(){
    if (global.conncection && global.connection.state !== 'disconnected') return global.connection;
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'crud',
        port: 3306, 
    });
    console.log("Conectou no MYSQL!");
    global.connection = connection;
    return connection;
}

async function select(){
    return "Ola";
}

module.exports = { select, connect}