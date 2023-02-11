var express = require("express");
var router = express.Router();
let client = require("../dbConnect");
let controller = require("../controller");

//post api
router.post("/", (req, res) => {
  controller.projectController.createProjects(req, res);
});

//get api
router.get("/", (req, res) => {
  controller.projectController.retrieveProjects(req, res);
});

module.exports = router;