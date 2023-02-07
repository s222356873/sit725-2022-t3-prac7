let client = require("../dbConnect")
let projectCollection;

setTimeout(() =>{
    projectCollection = client.mongoClient.db().collection("Project")
    },2000)
 
 //insert project..
 const insertProjects=(project,callback) =>{
     projectCollection.insert(project,callback);
    }
//get project..
const getProjects =(callback) => {
    projectCollection.find({}).toArray(callback)
      }
//create project..
const createProject = (req,res) =>{
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
}
//Retrieve project
const retrieveProject = (req,res) =>{
getProjects((err,result) => {
    if(err) {
    res.json({statusCode: 400, message: err})
    }
    else {
   res.json({statusCode: 200, message:"Success", data: result})
    }
   })
   }
   module.export =(retrieveProject,createProject)
