var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',{person:{name:'anandhu c',age:20,qln:'bca'}});
});

module.exports = router;
