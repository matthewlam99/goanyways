const router = require('express').Router();

const authCheck = (req, res, next) => {
  if(!req.user){
    //if user is not logged in
    res.redirect('/auth/login');
  }else{
    //if they are logged in
    next();
  }
};

router.get('/', authCheck, (req, res) =>{
  res.render('profile', {user: req.user, title: req.user.username, page_name: 'login'});
});

module.exports = router;
