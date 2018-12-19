const articlecontroller = require('../controllers/user.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

const passport = require('passport')

module.exports = (router) => {
  router
    .get(
      '/auth/github',
      passport.authenticate('github', {
        scope: ['profile', 'email']
      })
    );
}
