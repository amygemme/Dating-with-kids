var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/dating", function(req, res) {
    db.Dating.findAll({}).then(function(dating) {
      res.json(dating);
    });
  });

  // Create a new example
  app.post("/api/dating", function(req, res) {
    db.Dating.create(req.body).then(function(dating) {
      res.json(dating);
    })
    .catch(function(err){
      console.log(err);
      // res.json(err);
      return res.send(err);
    });
  });

  // Delete an example by id
  app.delete("/api/dating/:id", function(req, res) {
    db.Dating.destroy({ where: { id: req.params.id } }).then(function(dating) {
      res.json(dbExample);
    });
  });
};
