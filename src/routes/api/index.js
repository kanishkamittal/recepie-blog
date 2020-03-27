const route = require('express').Router()

route.use('/recepies', require('./recepies'))
route.use('/comments', require('./comments'))

module.exports = route