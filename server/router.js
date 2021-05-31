var express = require('express')
var router = express.Router()
var controllers = require('./controllers')

router
  .route('/pokedex')
    .get(controllers.getAll)

router
  .route('/pokedex/:type')
    .get(controllers.getType)

router
  .route('/pokedex/:id')
    .put(controllers.editName)
    .delete(controllers.delete)

module.exports = router;