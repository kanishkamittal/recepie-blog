const passport = require('passport')
const { User } = require('../models/db')

passport.serializeUser((user, done) => done(null, user.id))


passport.deserializeUser((username, done)=> {
  User.findOne({
    username: username
  }).then((user) => {
      if (!user) {
          return done(new Error("No such user"))
      }
      return done(null, user)
  }).catch((err) => {
      done(err)
  })
})


passport.use(require('./strategies/passport-local-strategy'))
module.exports = passport


