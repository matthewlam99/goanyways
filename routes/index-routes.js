var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {user: req.user, title: 'Home', page_name: '/' });
});

router.get('/contact', function(req, res, next){
  res.render('contact',{user: req.user, title: 'Contact Us', page_name: 'contact'});
});

router.get('/about', function(req, res, next){
  res.render('about',{user: req.user, title: 'About Us', page_name: 'about'  });
});

module.exports = router;
