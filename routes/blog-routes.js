const router = require('express').Router();
const Blog = require('../models/blog-model');
/*
const authCheck = (req, res, next) => {
  if(!req.user){
    //if user is not logged in
    res.redirect('/auth/login');
  }else{
    //if they are logged in
    next();
  }
};
*/
//dont forget to add authcheck back to the callback function

//get a list of blogs
router.get('/', (req, res, next) => {
  Blog.find({}).then((blogs) => {
    res.render('blog', {user: req.user, title: 'Blog', page_name: 'blog', blog: blogs});
  }).catch(next);
});

//create a new blog to the DB
router.post('/', (req, res, next) => {
  Blog.create(req.body).then((blog) => {
    res.send(blog);
    //res.render('blog', {user: req.user, title: req.user.username, page_name: 'blog'});
  }).catch(next);
});

//update a blog post
router.put('/:id', (req, res, next) => {
  Blog.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Blog.findOne({_id: req.params.id}).then((blog) => {
      res.send(blog);
    }).catch(next);
  });
  //res.render('blog', {user: req.user, title: req.user.username, page_name: 'blog'});
});

//delete a blog post
router.delete('/:id', (req, res, next) => {
  Blog.findByIdAndRemove({_id: req.params.id}).then((blog) => {
    res.send(blog);
  }).catch(next);
  //res.render('blog', {user: req.user, title: req.user.username, page_name: 'blog'});
});

module.exports = router;
