const mongoose = require('mongoose');

require('./Todo.model')

let DuosSchema = new mongoose.Schema({  
  user :  [{
    ref: 'todo',
    type: mongoose.Schema.Types.ObjectId
  }]
})

let DuosModel = mongoose.model('duos', DuosSchema)

module.exports = DuosModel;