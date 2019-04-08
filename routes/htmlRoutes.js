var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.dating.findAll({}).then(function(dating_poolDB) {
      res.render("index", {
        msg: "Welcome!",
        examples: dating_poolDB
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.dating.findOne({ where: { id: req.params.id } }).then(function(dating_poolDB) {
      res.render("example", {
        example: dating_poolDB
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
