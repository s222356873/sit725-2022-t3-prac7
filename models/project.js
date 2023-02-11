var client = require("../dbConnect.js");
var projectCollection;

projectCollection = client.db().collection("Pets");

// get project...
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

module.exports = { getProjects, insertProjects };
