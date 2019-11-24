// Import models connection.
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burgerName, 0
  ], function () {
    res.redirect("/");
  });
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devour
  }, condition, function () {
    res.redirect("/");
  });
});

module.exports = router;
