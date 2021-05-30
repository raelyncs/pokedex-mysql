var express = require('express')
var router = express.Router()
var controllers = require('./controllers')

router
  .route('/pokedex')
    .get(controllers.getAll)

router
  .route('/pokedex/:type')
    .get(controllers.getType)

module.exports = router;