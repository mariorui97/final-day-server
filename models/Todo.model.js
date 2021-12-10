const mongoose = require('mongoose');

require('./User.model')

let TodoSchema = new mongoose.Schema({  
  summonerName: {type: String, required: true},
  position: {type: String},
  tier: {type: String},
  favChamps: {type: String},
  note: {type: String}, 
  userId :  [{
    ref: 'user',
    type: mongoose.Schema.Types.ObjectId
  }]
})

let TodoModel = mongoose.model('todo', TodoSchema)

module.exports = TodoModel;