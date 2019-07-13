const express = require('express')
const Sequelize = require('sequelize')
const app = express()

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './db.sqlite'
  })

sequelize
  .authenticate()
  .then(()=>{
  console.log('connection has been established successfully');
  })
  .catch(err=>{
    console.error('Unable yo connect to the database')
  });

app.get('/',(req,res)=>{
    res.send('OK')
})