var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Dating.findAll({}).then(function(dating_poolDB) {
      // console.log("dating: ", dating_poolDB)
      
      res.render("index", {
        msg: "Welcome!",
        database: dating_poolDB
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Dating.findOne({ where: { id: req.params.id } }).then(function(dating_poolDB) {
      res.render("example", {
        database: dating_poolDB
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
