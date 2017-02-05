var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.jsonp({name: 'yeoman'})
  // res.send('respond with a resource');
});

router.put('/', function (req, res) {
  res.send('PUT request to homepage');
});

module.exports = router;
