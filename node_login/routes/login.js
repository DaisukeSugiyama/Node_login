var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/post', function(req, res, next) {
    var id = req.body['id'];
    var password = req.body['password'];
    console.log(id + " : " + password);
    res.render('index', { title: 'Login' });
});

module.exports = router;