var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { title: 'Project Mongoose, use wisely' });
});

module.exports = router;
