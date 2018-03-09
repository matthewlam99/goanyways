var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page_name: '/' });
});

router.get('/contact', function(req, res, next){
  res.render('contact',{ title: 'Contact Us', page_name: 'contact'});
});

router.get('/about', function(req, res, next){
  res.render('about',{ title: 'About Us', page_name: 'about'  });
});

module.exports = router;
