const express = require('express')
const mysql = require('mysql2')

const app = express()

const conn = mysql.createConnection({
    host:'localhost',
    database: 'testdb',
    user: 'root',
    password: 'ayushnagar123'
})

conn.query(
    `CREATE TABLE IF NOT EXISTS users(
        id int auto_increment primary key,
        name varchar(50) not null,
        age integer not null,
        city varchar(30)
    )`,
    (err,results)=>{
        if(err){
            console.error(err)
        }
        else{
            console.log('table user created')
        }
        conn.close();
})

app.get('/',(req,res)=>{
    res.send("Hi lets check mysql with node")
})

app.listen(3000,(req,res)=>{
    console.log('http://localhost:3000')
})