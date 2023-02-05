require('dbtenv').config()

//mongodb connection
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:admin@cluster0.rlc2qbp.mongodb.net/sit725'
const client= new MongoClient(url,{useNewUrlParser: true})

client.connect((err,db) => {
    projectCollection = client.db().collection(collectionName);
    if(!err){
      console.log('MongoDb Connected')
    }
    else{
      console.log("DB Error",err);
      process.exit(1);
    }
} )

module.MongoClient = client; 