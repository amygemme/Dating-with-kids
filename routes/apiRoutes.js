var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/dating", function(req, res) {
    db.dating.findAll({}).then(function(dating) {
      res.json(dating);
    });
  });

  // Create a new example
  app.post("/api/dating", function(req, res) {
    db.dating.create(req.body).then(function(dating) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/dating/:id", function(req, res) {
    db.dating.destroy({ where: { id: req.params.id } }).then(function(dating) {
      res.json(dbExample);
    });
  });
};
