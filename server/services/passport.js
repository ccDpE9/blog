const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// dependency injection
// use = bind?
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.githubClientId,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);
