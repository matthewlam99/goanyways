const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
  //options for the GoogleStrategy
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
  //check if user already exist in DB
  User.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser){
      // user already exists
      console.log('user is: ', currentUser);
      done(null, currentUser);
    }else{
      // if not, create new user in our DB
      new User({
        username: profile.displayName,
        googleId: profile.id,
        thumbnail: profile._json.image.url,
      }).save().then((newUser) => {
        console.log("New user created: " + newUser);
        done(null, newUser);
      });
    }
  });


  })
);
