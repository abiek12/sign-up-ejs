var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Sign up" });
});

router.post("/submit", (req, res) => {
  console.log(req.body);
  res.render("user",{registerOrNot:"Sucessfull"});
});

module.exports = router;
