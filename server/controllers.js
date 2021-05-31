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
  },
  editName: (req, res) => {
    var name = req.body.name;
    console.log(name);
    var id = req.params.id
    var queryStr = `UPDATE pokemon set name="${name}" where id= ${id}`
    db.query(queryStr, (err, results) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(`updated name of pokemon with id: ${id}`)
      }
    })
  },
  delete: (req, res) => {
    var id = req.params.id;
    // var queryStr= `DELETE FROM pokemon WHERE id=${id}; DELETE FROM images WHERE id=${id}`;
    var queryStr=`DELETE pokemon, images  FROM pokemon INNER JOIN images
    WHERE pokemon.imageNum = images.id  and pokemon.id = ${id}`
    db.query(queryStr, (err, results) => {
      if(err){
        res.status(400).send(err);
      } else {
        res.status(200).send(`deleted pokemon at id: ${id}`)
      }
    })
  }
}

module.exports = controllers;

