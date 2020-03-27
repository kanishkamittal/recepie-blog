const route = require('express').Router()

route.use((req, res, next) => {
  if (req.user) {
    res.locals.username = req.user.username
  }
  next()
})

route.use('/recepies', require('./recepies'))
route.use('/auth', require('./auth'))

module.exports = route