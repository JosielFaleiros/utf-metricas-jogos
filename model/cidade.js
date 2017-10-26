var mongoose = require("mongoose")

var CidadeSchema = new mongoose.Schema({
  name: {
    type: String
  }
})

module.exports = mongoose.model('Cidade', CidadeSchema)
