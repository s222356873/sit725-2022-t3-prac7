var express = require('express')
var router = express.Router();
let client = require("../dbConnect")
let projectCollection;

setTimeout({} => {
    projectCollection=client.mongoClient.db().collection("Projects");
}, 2000)

//insert project..
const insertProjects=(project,callback) =>{
    projectCollection.insert(project,callback);
   }
  
   //post api..
   app.post('/api/projects',(req,res)=>{
    console.log("New Project added",req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result)=>{
      if(err){
        res.json({statusCode:400,message:err})
      }
      else{
        res.json({statusCode:200,message:"Project Successfully added", data:result})
      }
    })
   })
  
  const getProjects =(callback) => {
    projectCollection.find({}).toArray(callback)
  }
  app.get('/api/projects',(req,res) => {
     getProjects((err,result) => {
     if(err) {
     res.json({statusCode: 400, message: err})
     }
     else {
    res.json({statusCode: 200, message:"Success", data: result})
     }
    })
    })
 module.exports = router;   