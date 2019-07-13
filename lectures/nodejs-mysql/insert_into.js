const mysql = require('mysql2')

const insert = {
    name:process.argv[2],
    age:parseInt(process.argv[3])
}

const conn = mysql.createConnection({
    host:'localhost',
    database: 'testdb',
    user: 'root',
    password: 'ayushnagar123'
})

conn.query(
    `INSERT INTO users(name,age) VALUES(
        '${insert.name}',
        ${insert.age}
    )`,
    function(err,results){
        if(err){
            console.error(err)
        }
        else{
            console.log(results)
            console.log('data inserted successfully')
        }
        conn.close();
    }
)