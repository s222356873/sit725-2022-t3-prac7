//require('dbtenv').config()

//mongodb connection
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.rlc2qbp.mongodb.net/test";
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err, db) => {
  if (!err) {
    console.log("MongoDb Connected Successfully");
  } else {
    console.log("DB Error : ", err);
    process.exit(1);
  }
});
module.exports = client;
client.connect((err, db) => {
  console.log('inside')
  if (!err) {
    console.log("MongoDB Connected");
  } else {
    console.log("DB Error: ", err);
    process.exit(1);
  }
});

module.exports = client;
