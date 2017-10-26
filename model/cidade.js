var mongoose = require("mongoose")

var CidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Cidade', CidadeSchema)
