const mongoose = require('mongoose');

let TodoSchema = new mongoose.Schema({
  summonerName: {type: String, required: true},
  position: {type: String},
  tier: {type: String},
  favChamps: {type: String},
  note: {type: String, required: true}
})

let TodoModel = mongoose.model('todo', TodoSchema)

module.exports = TodoModel;