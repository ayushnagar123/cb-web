const {connectdb} = require('./database')

//create
connectdb('testdb').then(db=>{
    const user = db.collection('users');
    return user.insertOne({
        name: 'Ayush',
        age: 20
    }).then(result=>{
        console.log(result)
    })
})

