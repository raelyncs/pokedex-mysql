const db = require('./db/index.js')

var controllers = {
  getAll: (req, res) => {
    var queryStr = `SELECT pokemon.id, pokemon.name, images.img, types.type FROM pokemon INNER JOIN images ON pokemon.imageNum = images.id INNER JOIN types on types.id = pokemon.typeNum;`;
    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },
  getType: (req, res) => {
    var type = req.params.type;
    var queryStr = `SELECT pokemon.id, pokemon.name, images.img, types.type FROM pokemon INNER JOIN images ON pokemon.imageNum = images.id INNER JOIN types on types.id = pokemon.typeNum WHERE type = "${type}"`
    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  }
}

module.exports = controllers;

/*
column wanted
pokemon.id
pokemon.name
types.type
images.img

info matching
types.id = pokemon.typeNum
images.id = imagesNum
*/