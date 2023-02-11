let projectModel = require("../models/project.js");

//create project
const createProjects = (req, res) => {
  console.log("New Project Added", req.body);
  var newProject = req.body;
  projectModel.insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ ststusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        message: "Project successfully added",
        data: result,
      });
    }
  });
};

//retrieve project
const retrieveProjects = (req, res) => {
  projectModel.getProjects((err, result) => {
    if (err) {
      res.json({ ststusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  });
};

module.exports = { retrieveProjects, createProjects };