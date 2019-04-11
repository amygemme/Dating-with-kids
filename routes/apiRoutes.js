var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/dating", function(req, res) {
    db.Dating.findAll({}).then(function(dating) {
      console.log(dating,"dating")
      res.json(dating);
    });
  });

  // Create a new example
  app.post("/api/dating", function(req, res) {
    console.log(req.body);

    // All the ones that dont need to be mutated
    const  { 
      first_name, 
      last_name, 
      age, 
      num_kids, 
      email, 
      custody, 
      gender_self, 
      match_man, 
      match_woman, 
      match_nonbinary, 
      fun, 
      support, 
      love, 
      unknown, 
      zip_code, 
      bio 
    } = req.body;

    // These ones need type conversion/ be mutated
    // let { match_man, match_woman, match_nonbinary, fun, support, love, unknown } = req.body
    db.Dating.create({
      first_name,
      last_name,
      age: parseInt(age),
      num_kids: parseInt(num_kids), 
      email,
      custody,
      gender_self,
      match_man: match_man  === 'true' ? true : false,
      match_woman: match_woman === 'true' ? true : false,
      match_nonbinary: match_nonbinary  === 'true' ? true : false,
      fun: fun  === 'true' ? true : false,
      support: support  === 'true' ? true : false,
      love: love  === 'true' ? true : false,
      unknown: unknown  === 'true' ? true : false,
      zip_code: parseInt(zip_code),
      bio,


    }).then(function(dating) {
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
