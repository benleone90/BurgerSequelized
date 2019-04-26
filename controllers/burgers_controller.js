var express = require("express");

var router = express.Router();

var Burgers = require("../models/")["Burgers"];

router.get("/", function(req, res) {
  Burgers.findAll({}).then(function(burger_name) {
    console.log(burger_name);
    return res.render("index", { burger_name });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create({ burger_name: req.body.burger_name }).then(function(dbPost) {
    console.log(dbPost);
    res.redirect("/");
  });
});

router.put("/api/burgers/update", function(req, res) {
  Burgers.update(req.body, { where: { id: req.body.id } }).then(function(
    burger_name
  ) {
    return burger_name
      .updateAttributes({
        devoured: true
      })
      .then(function() {
        return res.redirect("/");
      });
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.delete(condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404);
    } else {
      res.status(200);
    }
  });
  res.redirect("/");
});

module.exports = router;
