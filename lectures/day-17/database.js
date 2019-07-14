const {MongoClient} = require('mongodb')

const url = 'mongodb://127.0.0.1:27017';

const  dbName = 'myproject';

module.exports.connectdb = (dbName) =>{
    return MongoClient.connect(url).then(client=>client.db(dbName))
}